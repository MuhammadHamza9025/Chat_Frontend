import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Users from './Users'
import { RxExit } from "react-icons/rx";
import { useSelector } from 'react-redux';


const Left = () => {
    const username = useSelector((e) => e.customreducer.username);
    return (

        <>
            <div className='w-[5%] bg-black border-r border-gray-700 flex items-end py-10' >
                <button className=''>
                    <RxExit className='text-white mx-3 text-xl cursor-pointer' />

                </button>
            </div>
            <div className='border border-black text-white w-[30%] bg-black '>

                <SearchBar username={username}></SearchBar>
                <Users></Users>
            </div>
        </>
    )
}

export default Left
