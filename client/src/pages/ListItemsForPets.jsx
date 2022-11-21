import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
function ListItemsForPets() {
    const itemsState = useSelector(state => state.getAllItemsReducer)
    const { items } = itemsState
    const param = useParams()
    const list = items.filter(i => i.forPetsType === param.forPetsType)

    return (
        <div className='w-full mt-[200px]'>
            <div className='w-full flex justify-around'>
                {!list.length ? <h1 className='w-full text-center'>No items here</h1>
                    : list.map(i => (
                        <div key={i.id} className='w-[200px] sm:w-[250px] text-center  overflow-hidden mx-2'>
                            <Link to={`/aboutItems/${i.id}`}>
                                <div className='w-full overflow-hidden h-[150px] sm:h-[250px] rounded-2xl'>
                                    <img className='w-full hover:scale-110 duration-150' src={i.img} alt={i.name} />
                                </div>
                            </Link>
                            <Link to={`/aboutItems/${i.id}`}>
                                <h1 className='my-3'>{i.name}</h1>
                            </Link>
                            <span className='my-3'>{i.price}$</span>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ListItemsForPets