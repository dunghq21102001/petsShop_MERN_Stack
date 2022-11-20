import React from 'react'
import { useParams } from 'react-router-dom'
import ListProduct from '../components/ListProduct'
import WarrantyPolicy from '../components/WarrantyPolicy'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartAction'
import { useState } from 'react'
function AboutProduct() {
    const [openPopup, setOpenPopup] = useState(false)
    const param = useParams()
    const dispatch = useDispatch()
    const petsState = useSelector(state => state.getAllPetsReducer)
    const { pets } = petsState


    const pet = pets?.find(pet => pet._id === param.id)
    let listPets
    if (pet?.type === 'cats') {
        listPets = pets?.filter(pet => pet.type == 'cats' && pet._id != param.id)
    } else {
        listPets = pets?.filter(pet => pet.type == 'dogs' && pet._id != param.id)
    }

    const handleAddToCart = () => {
        setOpenPopup(true)
        dispatch(addToCart(pet, 1))
        setTimeout(() => {
            setOpenPopup(false)
        }, 2000)
    }

    return (
        <div>

            <div className='w-full mt-[200px] flex flex-col sm:flex-row'>

                <div className={openPopup
                    ? "z-10 bg-green-400 border-l-4 border-white text-white p-4 duration-200 fixed right-0 top-[200px]"
                    : "z-10 bg-green-400 border-l-4 border-white text-white p-4 duration-200 fixed right-[-220px] top-[200px]"}
                    role="alert">
                    <p className="font-bold">Notify</p>
                    <p>Successfully added to cart</p>
                </div>

                <div className='w-[100%] sm:w-[50%]'>
                    <img src={pet?.img}
                        alt='product image' className='w-[100%]' />
                </div>
                <div className='w-[100%] sm:w-[50%] px-4 flex flex-col justify-around mt-4 sm:mt-0'>
                    <h1 className='font-bold text-[24px] sm:text-[32px]'>{pet?.name}</h1>
                    <div className='border-b-[1px] border-[#fdbc1c] w-full my-3'></div>
                    <h5><span className='text-[18px] font-bold'>Price:</span> {pet?.price}$</h5>
                    <h5><span className='text-[18px] font-bold'>Origin:</span> {pet?.origin}</h5>
                    <span className='text-[18px] font-bold'>Description</span>
                    <p>
                        {pet?.description || 'None'}
                    </p>
                    <span className='text-[18px] font-bold'>Pets review</span>
                    <p>{pet?.petsReview || 'None'}</p>
                    <div className='w-full flex justify-center'>
                        <button
                            onClick={handleAddToCart}
                            className='border-[#fdbc1c] border-[1px] border-solid rounded-md w-[30%] py-2 m-4 text-[#fdbc1c] hover:bg-[#fdbc1c] hover:text-white'>Add to Cart</button>
                        <button className='bg-[#fdbc1c] border-none rounded-md w-[30%] py-2 m-4 text-white hover:bg-[#c9961b]'>Buy Now</button>
                    </div>
                </div>
            </div>
            <WarrantyPolicy />
            <ListProduct listOfPets={listPets} />
        </div>
    )
}

export default AboutProduct