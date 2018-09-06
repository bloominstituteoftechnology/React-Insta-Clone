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

	updateInputText = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	attemptSubmit = () => {};

	submit = event => {
		event.preventDefault();
		localStorage.setItem('username', event.target.children[1].value);
		localStorage.setItem('password', event.target.children[2].value);
		window.location.reload();
	};

	render() {
		return (
			<div className="Login">
				<form className="login-form" onSubmit={this.submit}>
					<div className="sprite" id="logo-word" />
					<input
						type="text"
						className="username-input"
						name="usernameText"
						placeholder="Username"
						value={this.state.usernameText}
						onChange={this.updateInputText}
					/>
					<input
						type="text"
						className="password-input"
						name="passwordText"
						placeholder="Password"
						value={this.state.passwordText}
						onChange={this.updateInputText}
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
