import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.searchInput = React.createRef();
		this.state = {
			searchLid: true,
			searchText: ''
		};
	}

	toggleSearchLid = () => {
		this.setState({
			searchLid: !this.state.searchLid
		});
	};

	focusSearchInput = () => {
		this.searchInput.current.focus();
	};

	updateSearchInput = event => {
		this.setState({
			searchText: event.target.value
		});
	};

	keyPress = event => {
		if (event.key === 'Enter' && this.state.searchText) {
			this.props.search(this.state.searchText);
			event.target.value = '';
		}
	};

	render() {
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
							ref={this.searchInput}
							onChange={this.updateSearchInput}
							onKeyPress={this.keyPress}
							onBlur={this.toggleSearchLid}
						/>
						<span className="sprite" id="search" />
						{this.state.searchLid && (
							<button
								className="search-lid"
								onClick={() => {
									this.toggleSearchLid();
									this.focusSearchInput();
								}}
							>
								<span id="search" className="sprite" />
								<span className="search-lid-text">
									{this.state.searchText || 'Search'}
								</span>
							</button>
						)}
					</div>

					<div className="navigation">
						<a href="/" id="explore" className="sprite" />
						<a href="/" id="activity" className="sprite" />
						<a href="/" id="profile" className="sprite" />
					</div>
				</div>
			</nav>
		);
	}
}

export default SearchBar;
