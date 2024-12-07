import React from 'react'
import { useSelector } from 'react-redux'

const Profile = ({ email, name, online }) => {
    // const getalluser = useSelector(e => e.customreducer.allusers)
    // const getids = getalluser.map((e) => e._id)
    // const isOnline = getids.some((e) => e == online)

    // console.log(getids, online, isOnline)
    const getalluser = useSelector(e => e.customreducer.allusers);
    const getids = getalluser.map((e) => String(e._id) === String(online));


    return (
        <div>
            <div className='p-4 py-2 flex hover:bg-gray-200 hover:bg-opacity-25 cursor-pointer shadow-md bg-slate-700'>
                <div className={`avatar ${getids == true && 'online'}`}>
                    <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className='flex flex-col mx-6 text-balance'>
                    <span>{name}</span>
                    <span>{email}</span>
                </div>
                <hr />



            </div>
        </div>
    )
}

export default Profile
