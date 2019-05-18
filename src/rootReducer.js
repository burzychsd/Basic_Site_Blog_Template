// combines all reducers
import { combineReducers } from 'redux'
import { mobileMenuReducer } from './components/organisms/Header/reducers';

const rootReducer = combineReducers({
    mobileMenu: mobileMenuReducer
});

export default rootReducer