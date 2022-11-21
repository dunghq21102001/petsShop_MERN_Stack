import axios from "axios"

export const getAllItems = () => async dispatch => {
    dispatch({ type: 'GET_ITEMS_REQUEST' })

    try {
        const res = axios.get('/api/items/getallitems')
        dispatch({ type: 'GET_ITEMS_SUCCESS', payload: res.data })

    } catch (error) {
        dispatch({ type: 'GET_ITEMS_FAILED', payload: error })
    }
}