import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../actions/userAction'
import Loading from './Loading'
import Notify from './Notify'
function Register({ setOpenRegister }) {
    const dispatch = useDispatch()
    const registerState = useSelector(state => state.registerUserReducer)
    const { error, loading, success } = registerState
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [matched, setMatched] = useState(false)
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()
        if (password != password2) {
            setMatched(true)
            setTimeout(() => {
                setMatched(false)
            }, 3000)
        }
        else {

            const user = {
                username,
                email,
                password
            }
            dispatch(registerUser(user))
            // console.log(user)
            navigate('/login')

        }

    }
    return (
        <>
            <div className={matched
                ? "z-10 bg-red-500 border-l-4 border-white text-white p-4 fixed right-[0px] top-[200px] duration-200"
                : "z-10 bg-red-500 border-l-4 border-white text-white p-4 fixed right-[-220px] top-[200px] duration-200"} role="alert">
                <p className="font-bold">Notify</p>
                <p>Password not matched</p>
            </div>
            {loading
                ? <Loading />
                : null}
            {success
                ? <Notify type='Notify' text='User registered successfully' />
                : null}
            <div className='w-[95%] sm:w-[70%] mx-auto flex h-[80vh] sm:h-[75vh] overflow-hidden items-center rounded-xl shadow-2xl'>
                <div className='hidden sm:block w-[50%]'>
                    <img src='https://images.unsplash.com/photo-1602979677071-1781b7f40023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwYW5kJTIwZG9nfGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt='login img' className='w-full' />
                </div>
                <form onSubmit={handleRegister} className='w-full sm:w-[50%] py-4 flex flex-col items-center justify-center'>
                    <div className='w-full flex justify-around items-center'>
                        <img src="https://www.drelseys.com/wp-content/uploads/2020/07/life-of-a-cat-gang.png" alt="loginLogo" className='w-[30%]' />
                        <h1 className='text-[30px] sm:text-[40px]'>Register</h1>
                        <img src='https://static.vecteezy.com/system/resources/previews/002/296/800/original/cartoon-character-corgi-dog-wearing-protective-face-mask-with-other-dogs-vector.jpg' alt='loginLogo' className='w-[30%]' />
                    </div>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='p-2 rounded-lg bg-gray-200 my-2 outline-none w-[80%]' />
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='p-2 rounded-lg bg-gray-200 my-2 outline-none w-[80%]' />
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='p-2 rounded-lg bg-gray-200 my-2 outline-none w-[80%]' />
                    <input type='password' value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder='Password again' className='p-2 rounded-lg bg-gray-200 my-2 outline-none w-[80%]' />
                    <div className='w-full flex justify-around flex-wrap'>
                        <h1 className='underline cursor-pointer'>Forgot password?</h1>
                        <h1>Have account? <span onClick={() => setOpenRegister(false)} className='underline cursor-pointer text-red-500'>Login now!</span></h1>
                    </div>
                    <button className='bg-[#fdbc1c] rounded-xl px-8 py-3 mt-4 text-white hover:text-red-500 hover:bg-yellow-300 duration-200'>Register</button>
                </form>
            </div>
        </>
    )
}

export default Register