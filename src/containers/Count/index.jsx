// 引入组件UI
import CountUI from '../../components/Count'
// 引入store
// import store from '../../redux/store'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

// a函数的返回值作为状态传给了UI组件
function a(state){
 return {
	 count:state,
 }
}

function b(){
return {
	increment:(val)=>{
		console.log(val);
	}
}
}


// 创建并暴露一个Count的容器组件  
export default connect(a,b)(CountUI)