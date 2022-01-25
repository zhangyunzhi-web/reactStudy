// // 引入组件UI
// import CountUI from '../../components/Count'
// 引入store
// import store from '../../redux/store'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import { increment, decrement, incrementAsync } from '../../redux/actions/count'

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

import React, { Component } from 'react'


class Count extends Component { 
	
	increment=()=>{
		const {value} = this.selectNumber
		this.props.increment(value*1)
	}
	decrement=()=>{
		const {value} = this.selectNumber
		this.props.decrement(value*1)
	}
	incrementIfOdd=()=>{
		const {value} = this.selectNumber
		if (this.props.count % 2 === 1) {
			this.props.increment(value*1)
		}
	}
	incrementAsync=()=>{
		const {value} = this.selectNumber
		this.props.incrementAsync(value*1,500)
	}
	render() {
		console.log(this.props,'-----');
		return (
			<div>
				<h1>当前求和为：{this.props.count}</h1>
				<span>
					<select ref={c=>this.selectNumber=c}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
					<button onClick={this.increment}>+</button>
					<button onClick={this.decrement}>-</button>
					<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
					<button onClick={this.incrementAsync}>异步加</button>
				</span>
			</div>
		)
	}
}



// 创建并暴露一个Count的容器组件  
export default connect(state => ({
	count: state
}), {
	increment:increment,
	decrement:decrement,
	incrementAsync:incrementAsync
})(Count)