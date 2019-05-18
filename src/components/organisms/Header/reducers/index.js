import { MOBILE_MENU_STATUS } from './../actions'

const initialState = {
    mobileMenuStatus: false
}

export const mobileMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOBILE_MENU_STATUS:
            return {
                ...state,
                mobileMenuStatus: !state.mobileMenuStatus
            }
        default:
            return state
    }
}