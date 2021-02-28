import React, {Component} from "react";
import "./ToDoListItem.css";
export default class ToDoListItem extends Component {
	render() {
		const {label, important, done, onDelete, onToggleImportant, onToggleDone} = this.props;
		let classNames = "todo-list-item";
		if(done) {
			classNames += " done";
		}
		if(important) {
			classNames += " important";
		}
		return <span className = {classNames}>
			<span className = "todo-list-item-label" onClick = {onToggleDone}>
				{label}
			</span>
			<button type = "button" className = "btn btn-outline-success btn-small float-right"
				onClick = {onToggleImportant}>
				<i className = "fa fa-exclamation" />
			</button>
			<button className = "btn btn-outline-danger btn-small float-right" onClick = {onDelete}>
				<i className = "fa fa-trash-o" />
			</button>
		</span>;
	}
}