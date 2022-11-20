export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const alreadyExists = state.cartItems.find(i => i._id === action.payload._id)
            if (alreadyExists) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i._id === action.payload._id ? action.payload : i)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }

        case 'DELETE_FROM_CART': return {
            ...state,
            cartItems: state.cartItems.filter(i => i._id !== action.payload._id)
        }
        default: return state
    }
}