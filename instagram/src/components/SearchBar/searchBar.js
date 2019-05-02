import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import './searchbar.css';
import styled from 'styled-components'

const Header= styled.header`
display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid black;
	height: 50px;
	width: 800px;
	margin: auto;
	padding: 0px 15px;
	background-color: white;


`

class SearchBar extends React.Component {
	handleChange = e => {
		this.props.filterPosts(e.target.value);
	};
	render() {
		return (
			<Header>
				
					<Logo />
					<input
						className="search"
						type="text"
						placeholder="Search"
						onChange={this.handleChange}
					/>
					<Menu />
				
			</Header>
		);
	}
}

export default SearchBar;
