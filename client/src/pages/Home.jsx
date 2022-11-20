import React from 'react'
import { useEffect } from 'react'
import dogVideo1 from '../assets/dog1.mp4'
import dogVideo2 from '../assets/dog2.mp4'
import ListProduct from '../components/ListProduct'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPets } from '../actions/petsActions'
function Home() {
    const dispatch = useDispatch()
    const petsState = useSelector(state => state.getAllPetsReducer)
    const { pets, loading, error } = petsState
    const listOfDogs = pets?.filter(pet => pet.type == 'dogs')
    const listOfCats = pets?.filter(pet => pet.type == 'cats')
    useEffect(() => {
        dispatch(getAllPets())
    }, [])
    return (
        <div className='w-full mt-[200px] sm:mt-[100px]'>

            {loading
                ? <img className='mx-auto w-[80%]' src='https://img.freepik.com/premium-vector/progress-bar-doodle-sketch-style-loading-icon-image-hand-drawn-vector-illustration_356415-1238.jpg?w=2000' alt='loading' />
                : error
                    ? <img className='mt-[200px] mx-auto' src='https://t3.ftcdn.net/jpg/03/56/19/18/360_F_356191845_Uf1HSScTIHcxXeK1UXuEn0rdAzMvTfxo.jpg' alt='wrong' />
                    : <>
                        <div className='flex'>
                            <video className='h-[50%] w-[50%]' src={dogVideo1} autoPlay loop muted />
                            <video className='h-[50%] w-[50%]' src={dogVideo2} autoPlay loop muted />
                        </div>
                        <ListProduct listOfPets={listOfDogs} />
                        <ListProduct listOfPets={listOfCats} />
                    </>}

        </div>
    )
}

export default Home