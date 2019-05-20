import HeaderReducer from '../common/header/store/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    header: HeaderReducer,
});