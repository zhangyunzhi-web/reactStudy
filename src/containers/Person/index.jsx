import { connect } from 'react-redux'
import { person} from '../../redux/actions/person'

import React, { Component } from 'react'
import {nanoid} from 'nanoid'

class Preson extends Component {
	addPerson=()=>{
		const name = this.nameNode.value
		const age = this.ageNode.value
		
		// 唯一id
		const id = nanoid()
		const personObj={id,name,age}
		console.log(name,age,id,personObj);
		this.props.person(personObj)
		console.log(this.props);
	}
	render() {
		return (
			<div>
				<input ref={c=>this.nameNode=c} type="text" placeholder="输入名字"/>
				<input ref={c=>this.ageNode=c} type="text" placeholder="输入年龄"/>
				<button onClick={this.addPerson}>添加</button>
				<ul>
					{
						this.props.personObj.map(p=>{
							return <li>姓名：{p.name}-----年龄：{p.age}</li>
						})
					}
				</ul>
				<p>之前的和为：{this.props.count}</p>
			</div>
		)
	}
}

export default connect(state => ({
	personObj: state.person,
	count:state.count
}), {
	person
})(Preson)
