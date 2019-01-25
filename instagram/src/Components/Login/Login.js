import React from 'react';
import PasswordMask from 'react-password-mask';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login: '',
			password: ''
		};
	}
	loging = (event) => {
		event.preventDefault();
		localStorage.setItem('password', this.state.password);
		localStorage.setItem('username', this.state.login);
		window.location.reload();
	};

	logingHandler = (event) => {
		this.setState({
			login: event.target.value
		});
	};
	passwordHandler = (event) => {
		this.setState({
			password: event.target.value
		});
	};

	render() {
		return (
			<div>
				<div>
					<h1>Log In</h1>
					<form>
						<input
							type="text"
							value={this.state.login}
							placeholder=" username"
							onChange={this.logingHandler}
						/>
						<PasswordMask
							type="text"
							value={this.state.password}
							placeholder="Password"
							onChange={this.passwordHandler}
						/>
						<button type="submit" onClick={this.loging}>
							Log in{' '}
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
