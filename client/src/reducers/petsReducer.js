export const getAllPetsReducer = (state = { pets: [] }, action) => {
    switch (action.type) {
        case 'GET_PETS_REQUEST':
            return {
                loading: true,
                ...state
            }
        case 'GET_PETS_SUCCESS':
            return {
                loading: false,
                pets: action.payload
            }
        case 'GET_PETS_FAILED':
            return {
                loading: false,
                error: action.payload
            }
        default: return state

    }
}