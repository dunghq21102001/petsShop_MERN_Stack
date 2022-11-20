import React from 'react'
import { BsCartPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
function ProductItems({ pet }) {
    return (
        <div className='w-[200px] sm:w-[250px] h-[350px] m-2 flex justify-between flex-col rounded-2xl overflow-hidden bg-gray-200'>
            <Link to={`/about/${pet._id}`}>
                <div className='overflow-hidden w-full h-[200px]'>
                    <img src={pet.img} alt='items for pets' className='w-full hover:scale-110 duration-100' />
                </div>
            </Link>
            <article className='w-full text-center '>
                <Link to={`/about/${pet._id}`}>
                    <h1 className='text-[#4e657b]'>{pet.name}</h1>
                </Link>
                <span>{pet.price}$</span>
            </article>
            <Link to={`/about/${pet._id}`}>
                <button className='w-full bg-[#fdbc1c] flex justify-center text-2xl py-2 items-center text-white'>
                    Buy
                    <BsCartPlusFill className='text-center mx-2' />
                </button>
            </Link>
        </div>
    )
}

export default ProductItems