// combines all reducers
import { combineReducers } from 'redux'
import { mobileMenuReducer, logoReducer } from './components/organisms/Header/reducers';

const rootReducer = combineReducers({
    mobileMenu: mobileMenuReducer,
    logo: logoReducer
});

export default rootReducer