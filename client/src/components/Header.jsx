import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsMinecart } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import HeaderList from './HeaderList'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { logoutUser } from '../actions/userAction'
function Header() {
    const cartState = useSelector(state => state.cartReducer)
    const usersState = useSelector(state => state.loginUserReducer)
    const { currentUser } = usersState
    const [searchPopup, setSearchPopup] = useState(false)
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSearch = (search) => {
        if (search == '') {
            setSearchPopup(true)
            setTimeout(() => {
                setSearchPopup(false)
            }, 2000)
        } else {
            navigate(`/search/${search}`)
            setSearch('')
        }
    }
    return (
        <div className='fixed top-0 z-50'>
            <div className={searchPopup
                ? "z-10 bg-red-500 border-l-4 border-r-4 border-white text-white p-4 duration-200 absolute top-4 w-[30%] left-[50%] translate-x-[-50%]"
                : "z-10 bg-red-500 border-l-4 border-r-4 border-white text-white p-4 duration-200 absolute top-[-200px] w-[30%] left-[50%] translate-x-[-50%]"}
                role="alert">
                <p className="font-bold">Notify</p>
                <p>Please input a name to search</p>
            </div>
            <div className='w-full bg-[#fdbc1c] flex justify-between py-2 sm:py-0'>
                <div className='justify-between p-2 items-center hidden sm:flex'>
                    <input value={search} onChange={e => setSearch(e.target.value)} type='text' className='border-none outline-none rounded-md py-2 px-4 w-[250px]' placeholder='What do you want to search' />
                    <BiSearchAlt2 onClick={() => handleSearch(search)} className='text-[30px] translate-x-[-30px] text-[#fdbc1c] cursor-pointer' />
                </div>
                <div className='text-white flex justify-between items-center text-[20px]'>
                    <Link to={'/cart'}>
                        <div className='flex justify-between mx-2 items-center cursor-pointer'>
                            {cartState.cartItems.length < 1
                                ? <> Cart <BsMinecart className='mx-2' /></>
                                : <div className='relative mr-3'>
                                    <BsMinecart className="mx-2" />
                                    <div className='bg-red-500 rounded-full leading-[25px] w-[25px] h-[25px] text-center absolute top-[-50%] right-[-20%]'>{cartState.cartItems.length}</div>
                                </div>
                            }
                        </div>
                    </Link>
                    {currentUser
                        ? <div className='mr-2 flex items-center'>
                            <h1>Hello,
                                <span className='underline mx-1'>{currentUser?.username}</span>
                            </h1>
                            <button onClick={() => dispatch(logoutUser())} className='rounded-xl bg-black ml-3 px-3 py-1'>Logout</button>
                        </div>
                        : <Link to={'/login'}>
                            <div className='flex justify-between mx-2 items-center cursor-pointer'>
                                Login
                                <FaUserAlt className='mx-2' />
                            </div>
                        </Link>}
                </div>
            </div>
            <HeaderList />
        </div >
    )
}

export default Header