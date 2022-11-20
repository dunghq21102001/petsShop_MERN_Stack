import { combineReducers, applyMiddleware, createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllPetsReducer } from './reducers/petsReducer'
import { cartReducer } from './reducers/cartReducer'
import { loginUserReducer, registerUserReducer } from './reducers/userReducer'


const reducer = combineReducers({
    getAllPetsReducer: getAllPetsReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const initialState = {
    cartReducer: {
        cartItems: cartItems
    },
    loginUserReducer: {
        currentUser: currentUser
    }
}
const composeEnhancers = composeWithDevTools({})


const store = configureStore({
    reducer,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
},
    composeEnhancers(applyMiddleware(thunk))
)


export default store