import {createStore,applyMiddleware,combineReducers} from 'redux'  //combineReducers就是合并reducers
import countReducer from './reducers/count'
import personReducer from './reducers/person'
// redux-thunk用于支持action异步任务
import thunk from 'redux-thunk'

const reducers = combineReducers({
	count:countReducer,
	person:personReducer
})
export default createStore(reducers,applyMiddleware(thunk))