import React from 'react';
import './Login.css';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			usernameText: '',
			passwordText: ''
		};
	}

	updateUsernameText = event => {
		this.setState({
			usernameText: event.target.value
		});
	};

	updatePasswordText = event => {
		this.setState({
			passwordText: event.target.value
		});
	};

	attemptSubmit = () => {};

	render() {
		return (
			<div className="Login">
				<form className="login-form" onSubmit={this.props.submit}>
					<div className="sprite" id="logo-word" />
					<input
						type="text"
						className="username-input"
						placeholder="Username"
						value={this.state.usernameText}
						onChange={this.updateUsernameText}
					/>
					<input
						type="text"
						className="password-input"
						placeholder="Password"
						value={this.state.passwordText}
						onChange={this.updatePasswordText}
					/>
					<button className="login-button" disabled={!this.state.usernameText}>
						Log in
					</button>
					<a href="/" className="forgot-password">
						Forgot password?
					</a>
				</form>
				<div className="signup">
					<p>
						Don't have an account?{' '}
						<a href="/" className="signup-link">
							Sign up
						</a>
					</p>
				</div>
			</div>
		);
	}
}

export default Login;
