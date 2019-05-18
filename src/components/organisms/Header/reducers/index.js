import { MOBILE_MENU_STATUS, LOGO_STATUS } from './../actions'

const mobileMenuState = {
    mobileMenuStatus: false
}

const logoState = {
    logoStatus: false
}

export const mobileMenuReducer = (state = mobileMenuState, action) => {
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

export const logoReducer = (state = logoState, action) => {
    switch (action.type) {
        case LOGO_STATUS:
            return {
                ...state,
                logoStatus: !state.logoStatus
            }
        default:
            return state
    }
}