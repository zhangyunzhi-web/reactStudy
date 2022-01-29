import React from "react";
import ReactDom from "react-dom";
import App from "./App.jsx"
import store from "./redux/store"
import {Provider} from "react-redux"
// import store from "./redux/store"

ReactDom.render(
<Provider store={store}>
	<App/>
</Provider>,
	document.getElementById("root")
	)

// 检测redux中状态的改变，如redux的状态发生了改变，就么就重新渲染App组件
// store.subscribe(()=>{
// 	ReactDom.render(<App/>,document.getElementById("root"))
// })
