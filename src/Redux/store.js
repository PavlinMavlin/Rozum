import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./Reducers/app-reducer";


const rootReducer = combineReducers({
    appReducer: appReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));