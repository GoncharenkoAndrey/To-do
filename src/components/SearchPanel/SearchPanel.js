import React, {Component} from 'react';
import './SearchPanel.css';
export default class SearchPanel extends Component {
	state = {
		term: ''
	}
	onSearchChange(event) {
		const term = event.target.value;
		this.setState({
			term
		});
		this.props.onSearchChange(term);
	}
	render() {
		return (
    		<input type="text"
				className="form-control search-input"
				placeholder="type to search"
				value = {this.state.term}
				onChange = {(event) => this.onSearchChange(event)} />
  		);
	}
};