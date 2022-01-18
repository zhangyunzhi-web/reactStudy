// 引入组件UI
import CountUI from '../../components/Count'
// 引入store
// import store from '../../redux/store'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 创建并暴露一个Count的容器组件  
export default connect()(CountUI)