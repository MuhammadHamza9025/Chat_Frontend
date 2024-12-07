import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ username }) => {
    return (
        <div className='mt-4'>
            <h3 className='font-semibold text-xl m-4'> {username ? `Welcome , ${username}` : 'Chats'}</h3>

            <div className='flex justify-center items-center'>

                <div className='bg-slate-700 p-2 rounded-md w-[80%] border border-slate-400  '>
                    <input type="text" placeholder="Search..." className='border-none outline-none  bg-slate-700' />
                </div>
                <button className='m-2 hover:bg-slate-800 hover:p-3 hover:duration-200 rounded-full'>
                    <FaSearch className='text-xl' />
                </button>
            </div>

            <hr className='mt-5' />
        </div>
    )
}

export default SearchBar
