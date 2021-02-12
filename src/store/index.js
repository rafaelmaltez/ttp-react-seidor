import { createStore, combineReducers } from 'redux';
import employeeReducer from '../reducers';
// utilizei root reducer como boa pratica, mesmo tendo apenas um reducer na aplicação até o momento.
const rootReducer = combineReducers({ employeeReducer });

const store = createStore(rootReducer);

export default store;