import React, { useEffect, useState, useRef } from 'react';
import Profile from './Profile';
import Message from './Message';
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { conversation_message } from '../../Reducer/Reducer';
import { io } from 'socket.io-client';

const Right = () => {
    const dispatch = useDispatch();
    const allusers = useSelector((state) => state.customreducer.allusers);
    const id = useSelector((state) => state.customreducer.id);
    const messages = useSelector((state) => state.customreducer.messages);
    const authuserId = useSelector((state) => state.customreducer.userId);
    const [socket, setsocket] = useState(null);
    const [message, setsendmessage] = useState('');
    const [online, setonline] = useState([]);

    const puser = allusers?.find((e) => e._id === id);

    // Fetch conversation history for the selected user
    useEffect(() => {
        const GetConversation = async () => {
            if (id) {
                const response = await fetch(`http://localhost:1000/get/${id}`, {
                    credentials: 'include',
                });
                const res = await response.json();
                dispatch(conversation_message(res.messages)); // Sync messages with Redux
            }
        };
        GetConversation();
    }, [id, dispatch]);

    // Establish socket connection
    useEffect(() => {
        if (authuserId) {
            const Socket = io('http://localhost:1000', {
                query: { userId: authuserId },
            });

            setsocket(Socket);

            // Handle online users
            Socket.on('getonline', (data) => setonline(data));

            // Handle incoming messages
            Socket.on('newMessage', (data) => {
                if (data.senderId == id) {
                    console.log('true')
                    const updatedMessages = [...messages, data];
                    dispatch(conversation_message(updatedMessages));
                }
                else {
                    console.log(id, data.senderId)
                }

                // Update Redux state
            });

            // Cleanup on unmount
            return () => {
                Socket.disconnect();
            };
        }
    }, [authuserId, messages, dispatch]);

    // Send message
    const handlesend = async () => {
        if (message && socket) {
            const response = await fetch(`http://localhost:1000/convo/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
                credentials: 'include',
            });

            const resData = await response.json();
            if (resData.status === 200) {
                // Update local Redux state for messages
                const newMessage = {
                    senderId: authuserId,
                    receiverId: id,
                    text: message,
                    createdAt: new Date(),
                };
                dispatch(conversation_message([...messages, newMessage]));

                setsendmessage(''); // Clear input field

            }
        }
    };
    const messagesRef = useRef(messages);

    // Update messagesRef when messages state changes
    useEffect(() => {
        messagesRef.current = messages;
        console.log(messagesRef.current)
    }, [messages]);

    // Handle Enter key press
    const setkeydown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Prevent newline
            handlesend();
        }
    };

    return (
        <div className='border border-black bg-slate-900 text-white w-[65%]'>
            {puser ? (
                <>
                    <Profile name={puser.name} email={puser.email} online={online} />
                    <Message messages={messagesRef} /> {/* Use Redux messages directly */}
                    <div className='mt-2'>
                        <div className='flex justify-center items-center'>
                            <div className='bg-slate-800 p-2 rounded-md w-[80%] border border-slate-400'>
                                <input
                                    type="text"
                                    placeholder="Enter message here."
                                    className='border-none outline-none bg-slate-800 min-w-[100%]'
                                    onChange={(e) => setsendmessage(e.target.value)}
                                    value={message}
                                    onKeyDown={setkeydown}
                                />
                            </div>
                            <button className='m-2'>
                                <IoSend
                                    className={`${message ? '' : 'hidden'} text-2xl`}
                                    onClick={handlesend}
                                />
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div className='text-center text-2xl mt-10'>No user found</div>
            )}
        </div>
    );
};

export default Right;
