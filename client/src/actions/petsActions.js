import axios from "axios"

export const getAllPets = () => async dispatch => {
    dispatch({ type: 'GET_PETS_REQUEST' })
    try {
        const res = await axios.get('/api/pets/getallpets')
        // console.log(res)
        dispatch({ type: 'GET_PETS_SUCCESS', payload: res.data })
    } catch (error) {
        dispatch({ type: 'GET_PETS_FAILED', payload: error })
    }
}