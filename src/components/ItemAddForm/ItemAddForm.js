import React, {Component} from "react";
import "./ItemAddForm.css";
export default class ItemAddForm extends Component {
	state = {
		label: ''
	};
	onLabelChange(event) {
		this.setState({
			label: event.target.value
		});
	}
	onSubmit(event) {
		event.preventDefault();
		this.props.onItemAdd(this.state.label);
	}
	render(){
		return (
			<form className = "item-add-form d-flex" onSubmit = {(event) => this.onSubmit(event)}>
				<input type="text"
					className ="form-control"
					placeholder = "What needs to be done"
					onChange = {(event) => this.onLabelChange(event)} />
				<button className="btn btn-outline-secondary">Add</button>
			</form>
		);
	}
}