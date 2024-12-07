import React from 'react'
import Left from '../Left/Left'
import Right from '../Right/Right'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { allusers } from '../../Reducer/Reducer'
const Home = () => {
    const [users, setusers] = useState([])
    const dispatch = useDispatch()
    const getallusers = async () => {
        const fetchusers = await fetch('https://chat-backend-alpha-vert.vercel.app/getallusers', {
            credentials: 'include'
        })
        const res = await fetchusers.json()
        console.log(res.users)
        dispatch(allusers(res.users))
    }
    useEffect(() => {
        getallusers()
    }, [])
    console.log(users)
    return (
        <div className='flex  h-[100dvh] '>
            <Left users={users} ></Left>
            <Right></Right>
        </div>
    )
}

export default Home
