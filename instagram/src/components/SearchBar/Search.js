import React, { Component } from 'react';
import "../../App.css"
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dummyData from '../../dummy-data';
import Form from '../Styles/Form';
import Input from '../Styles/Input';

/* const Search = props => { */
	class Search extends Component {
		constructor(props) {
		  super(props);
		  this.state = {
			searchName: '',	
			
		  };
		}


	clickHandler = (event) => {
		/* event.preventDefault(); */
		this.setState({ [event.target.name]: event.target.value });
		console.log(this.state)
	}

	 submitHandler = (event) => {
		event.preventDefault();
		console.log(this.state.searchInput)
		

	}
render() {
	return (
		<div>
			<Form onSubmit={this.submitHandler} value={this.props.value}>
				<Input
					placeholder="Search..."
					type="text"
					name="searchInput"
					value={this.props.value}
					onChange={this.clickHandler}
				/>
			</Form>
		</div>
	)

}
}

export default Search;
