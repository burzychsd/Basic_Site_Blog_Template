import { SET_DIMENSIONS } from './../actions'

const dimensionsState = {
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
}

export const dimensionsReducer = (state = dimensionsState, action) => {
    switch (action.type) {
        case SET_DIMENSIONS:
            return {
                ...state,
                width: typeof window !== 'undefined' ? action.width : 0,
                height: typeof window !== 'undefined' ? action.height : 0
            }
        default:
            return state
    }
}