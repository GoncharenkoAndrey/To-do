import React from "react";
import TodoListItem from "../ToDoListItem/ToDoListItem";
import "./ToDoList.css"
const ToDoList = ({todos, onDelete, onToggleImportant, onToggleDone}) => {
	const elements = todos.map((item)=>{
		const {id, ...itemProperties} = item;
		return (
			<li key={id} className="list-group-item">
				<TodoListItem {...itemProperties}
					onDelete = {() => onDelete(id)}
					onToggleImportant = {() => onToggleImportant(id)}
					onToggleDone = {() => onToggleDone(id)}/>
			</li>
		);
	});
	return(
		<ul className="list-group todo-list">
			{elements}
		</ul>
	);
};
export default ToDoList;