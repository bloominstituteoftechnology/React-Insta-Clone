import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
	let searchInput = React.createRef();

	function clickHandler() {
		searchInput.current.focus();
	}

	// This breaks the site
	// function onBlurHandler() {
	// 	props.toggleSearchLid();
	// }

	return (
		<nav className="SearchBar">
			<div className="container">
				<div className="logo">
					<a href="/" id="glyph" className="sprite" />
					<a href="/" id="logotype" className="sprite" />
				</div>

				<div className="search-box">
					<input
						type="text"
						className="search-input"
						placeholder="Search"
						ref={searchInput}
						// onBlur={onBlurHandler()}
					/>
					<span className="sprite" id="search" />
					<button
						className={'search-lid' + (props.searchLid ? '' : ' hidden')}
						onClick={() => {
							props.toggleSearchLid();
							clickHandler();
						}}
					>
						<span id="search" className="sprite" />
						<span className="search-lid-text">Search</span>
					</button>
				</div>

				<div className="navigation">
					<a href="/" id="explore" className="sprite" />
					<a href="/" id="activity" className="sprite" />
					<a href="/" id="profile" className="sprite" />
				</div>
			</div>
		</nav>
	);
};

export default SearchBar;
