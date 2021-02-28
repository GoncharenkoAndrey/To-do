import React, {Component} from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import ToDoList from "../ToDoList/ToDoList";
import ItemAddForm from "../ItemAddForm/ItemAddForm.js";
import "./App.css";
export default class App extends Component {
	state = {
		 todoData: [
			this.createItem(1, "Drink cofee"),
			this.createItem(2, "Make awesome app"),
			this.createItem(3, "Have a lunch")
	]};
	createItem(id, label) {
		return {
				id,
				label,
				important: false,
				done: false
			};
	}
	toggleProperty(data, id, propertyName) {
		const index = data.findIndex((element) => element.id === id);
		const item = data[index];
		const newItem = {...item, [propertyName]: !item[propertyName]};
		const newData = [...data];
		newData[index] = newItem;
		return {
			todoData: newData
		};
	}
	addItem(text) {
		this.setState((state) => {
			const id = state.todoData.length;
			const newItem = this.createItem(id, text);
			const newData = [
				...state.todoData,
				newItem
			];
			return {
				todoData: newData
			};
		});
	}
	deleteItem(id) {
		this.setState((state) => {
			return {
				todoData: state.todoData.filter((item) => item.id !== id)
			};
		});
	}
	onToggleImportant(id) {
		this.setState((state) => {
			return this.toggleProperty(state.todoData, id, "important");
		});
	}
	onToggleDone(id) {
		this.setState((state) => {
			return this.toggleProperty(state.todoData, id, "done");
		});
	}
	render() {
		const {todoData} = this.state;
		const doneCount = this.state.todoData.filter((element) => element.done).length;
		const todoCount = this.state.todoData.length - doneCount;
		return (
			<div className = "todo-app">
				<AppHeader toDo = {todoCount} done = {doneCount} />
      			<div className = "top-panel d-flex">
        			<SearchPanel />
        			<ItemStatusFilter />
      			</div>
      			<ToDoList
					todos = {todoData}
					onDelete = {(id) => {this.deleteItem(id)}}
					onToggleImportant = {(id) => this.onToggleImportant(id)}
					onToggleDone = {(id) => this.onToggleDone(id)}/>
				<ItemAddForm onItemAdd = {(text) => this.addItem(text)} />
    		</div>
		);
	}
};