import {createStore,applyMiddleware} from 'redux'  //combineReducers就是合并reducers
// redux-thunk用于支持action异步任务
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import allreducers from './reducers/index'

export default createStore(allreducers,composeWithDevTools(applyMiddleware(thunk)))