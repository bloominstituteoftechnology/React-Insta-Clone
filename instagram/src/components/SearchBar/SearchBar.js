import React, { Component } from 'react';
import './SearchBar.css';
import {
	Header,
	Container,
	LogoHeader,
	LogoImage,
	SearchBox,
	SearchInput
} from './SearchBarStyles';

export default class SearchBar extends Component {
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

	//Try to change to sessionStorage so this isn't a thing
	clearLocalStorage = () => {
		localStorage.clear();

	};

	render() {
		return (
			<Header>
				<Container>
					<LogoHeader>
						<LogoImage as="a" href="/" />
					</LogoHeader>

					<SearchBox>
						<SearchInput
							type="text"
							placeholder="Search"
							innerRef={this.searchInput}
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
					</SearchBox>

					<nav className="navigation">
						<a href="/" id="explore" className="sprite" title="Navigation" />
						<a href="/" id="activity" className="sprite" title="Heart" />
						<a href="/" id="profile" className="sprite" onClick={this.clearLocalStorage} title="Log Out" />
					</nav>
				</Container>
			</Header>
		);
	}
}
