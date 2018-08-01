import React, {Component} from "react";
import PropTypes from 'prop-types';
import "./Header.css";

class Header extends Component {
	state = {
		show: true
	};

	inputRef = React.createRef();

	handleClick = () => {
		this.setState({ show: false }, () => this.inputRef.current.focus());
	};

	handleFocusOut = () => this.setState({ show: true });


	render() {
		return (
			<header className="Header">
				<div className="container">
					<div className="Header__nav">
						<a href="#" className="Header__nav-brand">
							<i className="fab fa-instagram Header__brand" />
							Instagram
						</a>
						<div className="Header__search-bar">
							<input
								ref={this.inputRef}
								onBlur={this.handleFocusOut}
								type="text"
								className="Header__search-input"
								placeholder="Search"
								onChange={e => this.props.onSearch(e.target.value)}
							/>
							{this.state.show ? (
								<div
									onClick={this.handleClick}
									className="Header__input-overlay"
								>
									<i className="fas fa-search" />
									Search
								</div>
							) : null}
						</div>
						<div className="Header__three-buttons">
							<i className="far fa-compass" />
							<i className="far fa-heart" />
							<i className="far fa-user" />
						</div>
					</div>
				</div>
			</header>
		);
	}
}
Header.propTypes = {
	onSearch: PropTypes.func.isRequired,
}

export default Header;
