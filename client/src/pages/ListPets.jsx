import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ListProduct from '../components/ListProduct'

function ListPets() {
    const petsState = useSelector(state => state.getAllPetsReducer)
    const { pets } = petsState
    const param = useParams()
    const list = pets?.filter(i => i.type == param.type)
    return (
        <div className='w-full mt-[200px]'>
            {!list.length ? <h1 className='w-full text-center'>No pets here</h1>
                : <ListProduct listOfPets={list} />}
        </div>
    )
}

export default ListPets