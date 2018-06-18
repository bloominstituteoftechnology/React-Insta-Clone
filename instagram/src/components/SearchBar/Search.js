import React, { Component } from 'react';

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			term: ''
		}
	}
	onChangeHandler = (event) => {
		this.setState({term: event.target.value})
	}
	render() {
		return (
			<div>
				<input value={this.state.term} onChange={this.onChangeHandler} />
			</div>
		);
	}
}

export default Search;