import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductItems from '../components/ProductItems'
import notFoundImg from '../assets/notfound.png'
function Search() {
    const param = useParams()
    const petsState = useSelector(state => state.getAllPetsReducer)
    const { pets } = petsState
    const listPetsFound = pets?.filter(p => p.name.toLowerCase().includes(param.name))

    return (
        <div className='w-full mt-[200px] flex flex-wrap justify-around'>
            {listPetsFound.length == 0
                ? <div className='w-[60%] mx-auto text-center text-[30px]'>
                    <h1>No pets found!</h1>
                    <img src={notFoundImg} alt="" className='w-[50%] mx-auto' />
                </div>
                : listPetsFound.map(i => (
                    <ProductItems key={i._id} pet={i} />
                ))}
        </div>
    )
}

export default Search