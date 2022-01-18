import {createStore} from 'redux'
import countReducer from './count_reducer'
// redux-thunk用于支持action异步任务
import thunk from 'redux-thunk'

export default createStore(countReducer)