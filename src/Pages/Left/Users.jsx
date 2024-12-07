import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userid } from '../../Reducer/Reducer'

const Users = () => {
    const dispatch = useDispatch()
    const [active, setactive] = useState();

    const users = useSelector((e) => e.customreducer.allusers)
    const hanldeclick = (id) => {
        dispatch(userid(id))
        setactive(id)
    }

    return (
        <div className='overflow-auto h-[80dvh]'>
            {
                users?.map((user, index) => {
                    return (
                        <React.Fragment >
                            <div className={`p-4 py-2 flex   cursor-pointer ${active == user._id ? 'bg-gray-700' : ''}`} key={index} onClick={() => hanldeclick(user._id)}>
                                <div className="avatar online">
                                    <div className="w-16 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                <div className='flex flex-col mx-6 text-balance'>
                                    <span>{user.email}</span>
                                    <span>{user.name}</span>
                                </div>
                                <hr />
                                {/* ///////////// */}




                            </div>
                        </React.Fragment>
                    )

                })
            }
        </div>
    )
}

export default Users
