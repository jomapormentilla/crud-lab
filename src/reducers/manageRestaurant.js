import { combineReducers } from 'redux'
import cuid from 'cuid';

const rootReducer = combineReducers({
    restaurants: restaurantsReducer,
    reviews: reviewsReducer
})

export default rootReducer

function restaurantsReducer(state = [], action){
    let idx
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const data = {
                id: cuid(),
                text: action.restaurantName
            }
            return [...state, data]

        case 'DELETE_RESTAURANT':
            idx = state.findIndex(r => r.id === action.id)
            return [...state.slice(0, idx), ...state.slice(idx + 1)]

        default:
            return state
    }
}

function reviewsReducer(state = [], action){
    let idx
    switch (action.type) {
        case 'ADD_REVIEW':
            const data = {
                id: cuid(),
                text: action.data.text,
                restaurantId: action.data.restaurantId
            }

            return [...state, data]

        case 'DELETE_REVIEW':
            idx = state.findIndex(review => review.id === action.id)
            return [...state.slice(0, idx), ...state.slice(idx + 1)]

        default:
            return state
    }
}