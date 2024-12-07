import React from 'react';
import { useSelector } from 'react-redux';

const Message = ({ messages }) => {
    // Get messages and user ID from Redux state
    // const getmessages = useSelector((state) => state.customreducer.messages);
    const id = useSelector((state) => state.customreducer.id);


    return (
        <div className="overflow-y-auto h-[70dvh] p-4">
            {messages.current?.length > 0 ? (
                messages.current?.map((messageObj) => (
                    <div
                        key={messageObj._id || messageObj.messageId || messageObj.message}  // Ensure a unique key
                        className={`chat ${messageObj.receiverId == id ? 'chat-end' : 'chat-start'} overflow-y-auto`}
                    >
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                {/* Dynamically set the image source if available */}
                                <img
                                    alt="User avatar"
                                    src={messageObj.senderAvatar || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}  // Fallback to a default image
                                />
                            </div>
                        </div>
                        <div className={`chat-bubble ${messageObj.receiverId === id ? '' : ' bg-blue-500'}`}>
                            {messageObj.message}
                        </div>
                    </div>
                ))
            ) : (
                <p>No messages found.</p>
            )}
        </div>
    );
};

export default Message;
