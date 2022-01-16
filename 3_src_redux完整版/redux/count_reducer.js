import {INCREMENT,DECREMENT} from '../constant'
// 该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
const initState = 0 
export default function countReducer(preState = initState,action){
	console.log(preState,action)
	if(preState === undefined) preState = 0
	const {type,data} = action
	switch (type) {
		case INCREMENT:
			return preState + data
		case DECREMENT:
			return preState - data
		// case 'incrementIfOdd':
		// 	if(preState %2 !==0){
		// 		return preState+data
		// 	}
		// case 'incrementAsync':
		// 	return preState - data
		default:
			return preState
	}
}