import { createStore, combineReducers } from 'redux';
import employeeReducer from '../reducers';

const rootReducer = combineReducers({ employeeReducer });

const store = createStore(rootReducer);

export default store;