import {combineReducers} from 'redux'  //combineReducers就是合并reducers
import countReducer from './count'
import personReducer from './person'
// redux-thunk用于支持action异步任务

const allreducers = combineReducers({
	count:countReducer,
	person:personReducer
})
export default allreducers