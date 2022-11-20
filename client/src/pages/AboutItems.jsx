import React from 'react'
import { useParams } from 'react-router-dom'
import WarrantyPolicy from '../components/WarrantyPolicy'
import { listOfItems } from '../ListOfItems'

function AboutItems() {
    const param = useParams()
    const item = listOfItems.find(i => i.id == param.id)
    return (
        <div className='w-full'>
            <div className='w-full mt-[200px] flex flex-col sm:flex-row'>
                <div className='w-[100%] sm:w-[50%]'>
                    <img src={item.img}
                        alt='product image' className='w-[100%]' />
                </div>
                <div className='w-[100%] sm:w-[50%] px-4 flex flex-col justify-around mt-4 sm:mt-0'>
                    <h1 className='font-bold text-[24px] sm:text-[32px]'>{item.name}</h1>
                    <div className='border-b-[1px] border-[#fdbc1c] w-full my-3'></div>
                    <h5><span className='text-[18px] font-bold'>Price:</span> {item.price}</h5>
                    <h5><span className='text-[18px] font-bold'>Origin:</span> {item.origin}</h5>
                    <h5><span className='text-[18px] font-bold'>For pets type:</span> {item.forPetsType}</h5>
                    <span className='text-[18px] font-bold'>Description</span>
                    <p>
                        {item.description || 'None'}
                    </p>
                    <div className='w-full flex justify-center'>
                        <button className='border-[#fdbc1c] border-[1px] border-solid rounded-md w-[30%] py-2 m-4 text-[#fdbc1c] hover:bg-[#fdbc1c] hover:text-white'>Add to Cart</button>
                        <button className='bg-[#fdbc1c] border-none rounded-md w-[30%] py-2 m-4 text-white hover:bg-[#c9961b]'>Buy Now</button>
                    </div>
                </div>
            </div>
            <WarrantyPolicy />
        </div>
    )
}

export default AboutItems