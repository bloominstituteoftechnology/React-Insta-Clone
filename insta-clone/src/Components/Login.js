import React from "react";
import PropTypes from "prop-types";
import "./Login.css";

class Login extends React.Component {
	state = {
		username: ""
	};

	handleChange = event =>
		this.setState({
			username: event.target.value
		});

	render() {
		return (
			<div className="container Login">
				<h1 className="Header__nav-brand Header__nav-brand--big">
				</h1>
				<a href="#" className="Header__nav-brand">
					<i className="fab fa-instagram Header__brand" />
					Instagram
				</a>
				<form
					className="form"
					onSubmit={e => {
						e.preventDefault();
						this.props.onLogIn(this.state.username);
					}}
				>
					<div className="form__group">
						<input
							className="form__input"
							type="text"
							placeholder="Username"
							required
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>
					<div className="form__group">
						<input
						className="form__input"
							type="password"
							placeholder="Password"
							required
						/>
					</div>
					<button className="button button--submit" type="submit">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

Login.propTypes = {
	onLogIn: PropTypes.func.isRequired
};

export default Login;
