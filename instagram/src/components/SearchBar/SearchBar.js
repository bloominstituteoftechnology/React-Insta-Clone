import React from 'react';
import './SearchBar.css';
import Styled from './SearchBarStyles';

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

	clearLocalStorage = () => {
		localStorage.clear();
	};

	logout = () => {
		localStorage.removeItem('username');
	};

	render() {
		return (
			<Styled.Header>
				<Styled.Container>
					<Styled.LogoHeader>
						{/* <LogoImageSmall as="a" href="/" /> */}
						<Styled.LogoImage as="a" href="/" />
					</Styled.LogoHeader>

					<Styled.SearchBox>
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
					</Styled.SearchBox>

					<nav className="navigation">
						<a
							href="/"
							id="explore"
							className="sprite"
							onClick={this.clearLocalStorage}
							title="Clear Local Storage"
						/>
						<a href="/" id="activity" className="sprite" />
						<a
							href="/"
							id="profile"
							className="sprite"
							onClick={this.logout}
							title="Log Out"
						/>
					</nav>
				</Styled.Container>
			</Styled.Header>
		);
	}
}

export default SearchBar;
