import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userAction'
import Register from '../components/Register'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
function Login() {
  const loginState = useSelector(state => state.loginUserReducer)
  const { error, loading } = loginState
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [openRegister, setOpenRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      navigate('/')
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    const user = {
      email,
      password
    }
    dispatch(loginUser(user))
  }

  return (
    <div className='w-full mt-[200px]'>
      {loading ? <Loading /> : null}
      {!openRegister
        ? <div className='w-[70%] mx-auto flex h-[68vh] overflow-hidden items-center rounded-xl shadow-2xl'>
          <div className='hidden sm:block w-[50%]'>
            <img src='https://images.unsplash.com/photo-1602979677071-1781b7f40023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwYW5kJTIwZG9nfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='login img' className='w-full' />
          </div>
          <form onSubmit={handleLogin} className='w-full sm:w-[50%] py-4 flex flex-col items-center justify-center'>
            <div className='w-full flex justify-around items-center'>
              <img src="https://media.istockphoto.com/id/1214084782/vector/cute-sleeping-cat-and-dog.jpg?s=170667a&w=0&k=20&c=nnCui0Njez_ZNYPS_TFpTBPBmdrDB7chQDeuRVqrgFY=" alt="loginLogo" className='w-[30%]' />
              <h1 className='text-[30px] sm:text-[40px]'>Login</h1>
              <img src='https://cdn.dribbble.com/userupload/2897609/file/original-b03056f81abcf6498e8c920c2e25f774.png?compress=1&resize=400x300&vertical=top' alt='loginLogo' className='w-[30%]' />
            </div>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='p-2 rounded-lg bg-gray-200 my-2 outline-none w-[80%]' />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='p-2 rounded-lg bg-gray-200 my-2 outline-none w-[80%]' />
            <div className='w-full flex justify-around flex-wrap'>
              <h1 className='underline cursor-pointer'>Forgot password?</h1>
              <h1>Don't have account? <span onClick={() => setOpenRegister(true)} className='underline cursor-pointer text-red-500'>Register now!</span></h1>
            </div>
            <button className='bg-[#fdbc1c] rounded-xl px-8 py-3 mt-4 text-white hover:text-red-500 hover:bg-yellow-300 duration-200'>Login</button>
            {error
              ? <span className='text-red-500 text-2xl'>Incorrect account or password</span>
              : null}
          </form>
        </div>
        : <Register setOpenRegister={setOpenRegister} />}
    </div>
  )
}

export default Login