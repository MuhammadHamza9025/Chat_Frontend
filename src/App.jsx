// import { useEffect, useMemo, useState } from 'react'
// import { io } from 'socket.io-client'

// function App() {
//   const [dataa, setdata] = useState('')
//   const [message, setmessage] = useState('')
//   const socket = io('http://localhost:9000')
//   const handlesubmit = () => {
//     if (message) {
//       socket.emit('newmessage', message)

//     }
//   }



//   useEffect(() => {
//     socket.on('connect', () => {
//       console.log("connected", socket.id)
//       // socket.on("message", (data) => {
//       //   console.log(data)
//       // })

//       socket.on("id", (data) => {
//         setdata(data)
//         socket.emit('nnmessage', 'hii')
//       })
//       socket.on("receive-message", (data) => {
//         console.log(data)
//       })
//     });

//   }, [])

//   return (
//     <>
//       <input type="text" name="" placeholder='Enter the message here...' id="" onChange={(e) => setmessage(e.target.value)} />
//       <button type='submit' onClick={handlesubmit}>Send</button>
//       <b>{dataa ? dataa : ''}</b>
//     </>
//   )
// }

// export default App
import React, { useEffect, useState } from 'react'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increment, getuser, getuserId } from './Reducer/Reducer'
import Home from './Pages/Home/Home'
import Error from './Pages/Error_Page/Error'
import Portfolio from './Pages/Login/Portfolio'

const App = () => {
  const dispatch = useDispatch()
  const [info, setinfo] = useState('')

  const count = useSelector((e) => e.customreducer.count)
  const username = useSelector((e) => e.customreducer.username)

  // const Navigate = useNavigate()
  const getusername = async () => {
    const response = await fetch('http://localhost:1000/getprofile', {
      credentials: 'include'
    })
    const res = await response.json()

    dispatch(getuser(res.name))
    dispatch(getuserId(res.id))
    if (!res) {
      window.location.href = '/';
      Navigate('/')
    }
    // console.log(res.name)
    // setinfo(res.name)
    // console.log(res.id)
  }


  useEffect(() => {
    const getcookie = async () => {
      const getcoo = await fetch('http://localhost:1000/check-cookie')
      const res = await getcoo.json()
      if (res.status == true) {
        getusername()
      }
      else {
        window.location.href = '/';
      }

    }
    getcookie()


  }, [dispatch])


  return (
    <div>


      {/* <button onClick={() => dispatch(increment(10))} className='bg-black p-3 text-white' >+</button>
      <button>-</button>
      <p>{count}</p> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Register></Register>}></Route>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path='/Portfolio' element={<Portfolio></Portfolio>}></Route>

          {/* <Route path='*' element={<Error />} ></Route> */}
        </Routes>
      </BrowserRouter>

    </div >
  )
}

export default App
