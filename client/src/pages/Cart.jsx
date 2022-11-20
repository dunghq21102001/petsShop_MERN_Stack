import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../actions/cartAction'

function Cart() {
  const cartState = useSelector(state => state.cartReducer)
  const cartItems = cartState.cartItems
  var total = cartItems.reduce((x, item) => x + item.prices, 0)
  // const realList = cartItems.map()
  const dispatch = useDispatch()
  return (
    <div className='w-full mt-[200px]'>
      {cartItems.length == 0 ? '' : <ul className='hidden w-[90%] sm:flex justify-between mx-auto'>
        <li className='w-[45%] text-left'>Name</li>
        <li className='w-[12%] text-center'>Unit Prices</li>
        <li className='w-[12%] text-center'>Quantity</li>
        <li className='w-[12%] text-center'>Price</li>
        <li className='w-[12%] text-center'>Action</li>
      </ul>
      }
      <div className='w-[90%] mx-auto flex flex-col items-center mb-[150px]'>
        {cartItems.length == 0
          ? <img src='https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png' alt='empty cart' />
          : cartItems.map((i, index) => (
            <ul key={index} className='w-full flex mt-4 items-center flex-wrap justify-between'>
              <li className='w-full sm:w-[45%] flex items-center'>
                <div className='w-[100px] h-[100px] overflow-hidden'>
                  <img className='w-full relative top-[50%] translate-y-[-50%]' src={i?.img} alt={i?.name} />
                </div>
                <h1 className='ml-4'>{i?.name}</h1>
              </li>
              <li className='w-[12%] text-center hidden sm:block'>{i?.price}$</li>
              <li className='w-[24%] sm:w-[12%] text-center flex items-center sm:block'>
                <button className='w-[27px] h-[27px] bg-red-400'
                  onClick={() => dispatch(addToCart(i, i?.quantity - 1))}>-</button>
                <span className='mx-2'>{i?.quantity}</span>
                <button className='w-[27px] h-[27px] bg-green-400'
                  onClick={() => dispatch(addToCart(i, i?.quantity + 1))}>+</button>
              </li>
              <li className='w-[12%] text-center'>{i?.prices}$</li>
              <li className='w-[12%] text-center'>
                <button
                  onClick={() => dispatch(deleteFromCart(i))}
                  className='w-[80px] h-[40px] bg-red-600 text-white rounded-md'>
                  Delete
                </button>
              </li>
            </ul>
          ))}
      </div>

      {cartItems.length > 0 ? <div className='fixed bottom-0 left-0 right-0 h-[70px] flex justify-around w-full items-center shadow-custom bg-white'>
        <span className='font-bold text-[30px]'>Total: {total}$</span>
        <button className='rounded-lg h-[50px] w-[100px] border-none bg-yellow-300 hover:bg-yellow-600 hover:text-white duration-500'>Checkout</button>
      </div> : ''}
    </div>
  )
}

export default Cart