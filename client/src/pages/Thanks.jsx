import React from 'react'
import { useSelector } from 'react-redux'
import thanksImg from '../assets/thanksImg.jpg'
function Thanks() {
    const usersState = useSelector(state => state.loginUserReducer)
    const { currentUser } = usersState
    return (
        <div className='mt-[200px] flex justify-around flex-wrap'>
            <div>
                <h1 className='text-3xl'>Thanks {currentUser?.username}</h1>
            </div>

            <img src={thanksImg} alt="" className='' />
        </div>
    )
}

export default Thanks