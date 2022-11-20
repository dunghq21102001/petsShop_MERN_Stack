import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../assets/logo.jpg'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
function HeaderList() {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <div className='w-full shadow-lg'>
            <div className='w-full flex items-center justify-around flex-col sm:flex-row bg-white pb-2'>
                <Link className='w-[50%] sm:w-[20%]' to={'/'}>
                    <img src={logoImage} alt='logo' className='w-full' />
                </Link>
                <button onClick={() => setOpenMenu(!openMenu)} className='mt-2 border-[#fdbc1c] rounded-md border-[1px] px-5 py-1 block sm:hidden'>
                    <AiOutlineMenu />
                </button>
                <ul className='sm:flex w-[80%] justify-around flex-wrap text-[22px] hidden items-center'>
                    <li className='mx-2 cursor-pointer text-center duration-200 p-2 rounded-lg hover:text-[#fdbc1c] '>
                        <Link to={'/'}>
                            <img src="https://static.vecteezy.com/system/resources/previews/004/933/875/non_2x/pet-shop-concept-dog-and-cat-house-flat-illustration-in-cartoon-style-vector.jpg" alt="" className='w-[50px] lg:w-[80px] mx-auto' />
                            Home
                        </Link>
                    </li>
                    <li className='mx-2 cursor-pointer text-center duration-200 p-2 rounded-lg hover:text-[#fdbc1c]'>
                        <Link to={'/listPets/dogs'}>
                            <img src='https://img.freepik.com/premium-vector/cute-little-dog-cartoon-isolated-white_143596-3.jpg?w=2000' alt='' className='w-[50px] lg:w-[80px] mx-auto' />
                            Dogs
                        </Link>
                    </li>
                    <li className='mx-2 cursor-pointer text-center duration-200 p-2 rounded-lg hover:text-[#fdbc1c]'>
                        <Link to={'/listPets/cats'}>
                            <img src="https://st.depositphotos.com/1005549/1553/v/450/depositphotos_15530783-stock-illustration-white-kitty.jpg" alt="" className='w-[50px] lg:w-[80px] mx-auto' />
                            Cats
                        </Link>
                    </li>
                    <li className='mx-2 cursor-pointer text-center duration-200 p-2 rounded-lg hover:text-[#fdbc1c]'>
                        <Link to={'/listItems/dogs'}>
                            <img src="https://previews.123rf.com/images/lynxtime/lynxtime1704/lynxtime170400107/75457256-beagle-and-different-dog-things-color-flat-icons-set-for-web-and-mobile-design-.jpg" alt="" className='w-[50px] lg:w-[80px] mx-auto' />
                            Items for Dogs
                        </Link>
                    </li>
                    <li className='mx-2 cursor-pointer text-center duration-200 p-2 rounded-lg hover:text-[#fdbc1c]'>
                        <Link to={'/listItems/cats'}>
                            <img src="https://media.istockphoto.com/id/1297668958/vector/a-large-set-of-items-for-cats-or-dogs-toys-for-animals-animal-accessories-hand-drawn-element.jpg?s=612x612&w=0&k=20&c=blZcOIvtTNlzK2SWdRkXpE10GxQKqkn7zxl66JrnbK0=" alt="" className='w-[50px] lg:w-[80px] mx-auto' />
                            Items for Cats
                        </Link>
                    </li>
                </ul>
                {openMenu ? <ul onClick={() => setOpenMenu(false)} className='flex w-[50%] justify-around flex-wrap flex-col text-[22px] py-2'>
                    <li className='border-b-[1px] border-black mx-2 cursor-pointer hover:text-[#fdbc1c]'>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </li>
                    <li className='border-b-[1px] border-black mx-2 cursor-pointer hover:text-[#fdbc1c]'>
                        <Link to={'/listPets/dogs'}>
                            Dogs
                        </Link>
                    </li>
                    <li className='border-b-[1px] border-black mx-2 cursor-pointer hover:text-[#fdbc1c]'>
                        <Link to={'/listPets/cats'}>
                            Cats
                        </Link>
                    </li>
                    <li className='border-b-[1px] border-black mx-2 cursor-pointer hover:text-[#fdbc1c]'>
                        <Link to={'/listItems/dogs'}>
                            Items for dogs
                        </Link>
                    </li>
                    <li className='border-b-[1px] border-black mx-2 cursor-pointer hover:text-[#fdbc1c]'>
                        <Link to={'/listItems/cats'}>
                            Items for cats
                        </Link>
                    </li>
                </ul> : ''}
            </div>
        </div>
    )
}

export default HeaderList