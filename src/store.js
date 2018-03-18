import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { TodoReducer } from './Reducers';

const store = createStore(combineReducers({
    TodoReducer,
}),applyMiddleware( thunk ));

export default store;