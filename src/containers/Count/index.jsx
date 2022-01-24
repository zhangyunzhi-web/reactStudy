// 引入组件UI
import CountUI from '../../components/Count'
// 引入store
// import store from '../../redux/store'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from '../../redux/count_action'

// mapStateToProps函数的返回值作为状态传给了UI组件  返回对象（传递状态）
// const mapStateToProps = state => ({
// 	count: state
// })
// 返回对象（传递方法 ）
// const mapDispatchToProps = dispatch => ({
// 	increment: (val) => {
// 		dispatch(increment(val))
// 	},
// 	decrement: val => {
// 		dispatch(decrement(val))
// 	},
// 	incrementAsync: (val, time) => {
// 		dispatch(incrementAsync(val, time))
// 	}

// })



// 创建并暴露一个Count的容器组件  
export default connect(state => ({
	count: state
}), {
	increment:increment,
	decrement:decrement,
	incrementAsync:incrementAsync

})(CountUI)