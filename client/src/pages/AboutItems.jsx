import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addItemToCart } from '../actions/cartAction'
import WarrantyPolicy from '../components/WarrantyPolicy'

function AboutItems() {
    const [openPopup, setOpenPopup] = useState(false)
    const param = useParams()
    const dispatch = useDispatch()
    const itemsState = useSelector(state => state.getAllItemsReducer)
    const { items } = itemsState
    const usersState = useSelector(state => state.loginUserReducer)
    const { currentUser } = usersState
    const item = items.find(i => i.id == param.id)
    const navigate = useNavigate()
    const handleAddToCart = () => {
        setOpenPopup(true)
        dispatch(addItemToCart(item, 1))
        setTimeout(() => {
            setOpenPopup(false)
        }, 2000)
    }
    const handleBuy = () => {
        if (!currentUser) navigate('/login')
        else navigate('/thanks')
    }
    return (
        <div className='w-full'>
            <div className='w-full mt-[200px] flex flex-col sm:flex-row'>

                <div className={openPopup
                    ? "z-10 bg-green-400 border-l-4 border-white text-white p-4 duration-200 fixed right-0 top-[200px]"
                    : "z-10 bg-green-400 border-l-4 border-white text-white p-4 duration-200 fixed right-[-220px] top-[200px]"}
                    role="alert">
                    <p className="font-bold">Notify</p>
                    <p>Successfully added to cart</p>
                </div>
                <div className='w-[100%] sm:w-[50%]'>
                    <img src={item?.img}
                        alt='product image' className='w-[100%]' />
                </div>
                <div className='w-[100%] sm:w-[50%] px-4 flex flex-col justify-around mt-4 sm:mt-0'>
                    <h1 className='font-bold text-[24px] sm:text-[32px]'>{item.name}</h1>
                    <div className='border-b-[1px] border-[#fdbc1c] w-full my-3'></div>
                    <h5><span className='text-[18px] font-bold'>Price:</span> {item.price}$</h5>
                    <h5><span className='text-[18px] font-bold'>Origin:</span> {item.origin}</h5>
                    <h5><span className='text-[18px] font-bold'>Type:</span> {item.type}</h5>
                    <h5><span className='text-[18px] font-bold'>For pets type:</span> {item.forPetsType}</h5>
                    <span className='text-[18px] font-bold'>Description</span>
                    <p>
                        {item.description || 'None'}
                    </p>
                    <div className='w-full flex justify-center'>
                        <button className='border-[#fdbc1c] border-[1px] border-solid rounded-md w-[30%] py-2 m-4 text-[#fdbc1c] hover:bg-[#fdbc1c] hover:text-white' onClick={handleAddToCart}>Add to Cart</button>
                        <button className='bg-[#fdbc1c] border-none rounded-md w-[30%] py-2 m-4 text-white hover:bg-[#c9961b]' onClick={handleBuy}>Buy Now</button>
                    </div>
                </div>
            </div>
            <WarrantyPolicy />
        </div>
    )
}

export default AboutItems