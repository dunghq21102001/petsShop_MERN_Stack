export const addToCart = (pet, quantity) => (dispatch, getState) => {
    let cartItem = {
        name: pet.name,
        _id: pet._id,
        img: pet.img,
        quantity: Number.parseInt(quantity),
        price: pet.price,
        prices: pet.price * quantity
    }

    if (cartItem.quantity > 5) alert('Can not add more than 5 pets!')
    else if (cartItem.quantity < 1) dispatch({ type: 'DELETE_FROM_CART', payload: pet })
    else dispatch({ type: 'ADD_TO_CART', payload: cartItem })



    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const deleteFromCart = (pet) => (dispatch, getState) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: pet })


    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}