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
	onSubmitHandler = (event) =>{
		event.preventDefault()
		this.props.handleSearch(this.state.term)
	}
	render() {
		return (
			<form onSubmit={this.onSubmitHandler}>
				<input className="search-bar" placeholder="Search" value={this.state.term} onChange={this.onChangeHandler} />
			</form>
		);
	}
}

export default Search;