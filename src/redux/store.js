import {createStore,applyMiddleware} from 'redux'
import countReducer from './reducers/count'
// redux-thunk用于支持action异步任务
import thunk from 'redux-thunk'

export default createStore(countReducer,applyMiddleware(thunk))