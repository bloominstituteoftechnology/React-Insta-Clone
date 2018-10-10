import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import './searchbar.css';

class SearchBar extends React.Component {
	handleChange = e => {
		this.props.filterPosts(e.target.value);
	};
	render() {
		return (
			<>
				<div className="searchBar">
					<Logo />
					<input
						className="search"
						type="text"
						placeholder="Search"
						onChange={this.handleChange}
					/>
					<Menu />
				</div>
			</>
		);
	}
}

export default SearchBar;
