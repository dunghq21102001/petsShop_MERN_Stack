import React from 'react'
import ProductItems from './ProductItems'
function ListProduct({ listOfPets }) {
    return (
        <div className='w-full my-10'>
            <h1 className='font-bold text-3xl text-center text-[#4e657b] my-3'>
                Explore your {listOfPets[0]?.type} land
            </h1>
            <div className='w-full flex justify-around flex-wrap'>
                {listOfPets?.map(pet => (
                    <ProductItems key={pet.id} pet={pet} />
                ))}
            </div>
        </div>
    )
}

export default ListProduct