// combines all reducers
import { combineReducers } from 'redux'
import { mobileMenuReducer, logoReducer } from './components/organisms/Header/reducers';
import { dimensionsReducer } from './components/templates/Layout/reducers';

const rootReducer = combineReducers({
    mobileMenu: mobileMenuReducer,
    logo: logoReducer,
    dimensions: dimensionsReducer,
});

export default rootReducer