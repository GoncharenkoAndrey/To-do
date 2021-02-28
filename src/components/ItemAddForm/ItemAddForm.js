import React, {Component} from "react";
import "./ItemAddForm.css";
export default class ItemAddForm extends Component {
	render(){
		return (
			<div className = "item-add-form">
				<button className="btn btn-outline-secondary" onClick = {() => this.props.onItemAdd()}>Add</button>
			</div>
		);
	}
}