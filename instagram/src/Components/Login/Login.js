import React from 'react';

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
		localStorage.setItem('username', this.state.login);
		window.location.reload();
	};
	logingHandler = (event) => {
		this.setState({
			login: event.target.value,
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
						<input
							type="text"
							value={this.state.password}
							placeholder="Passwprd"
							onChange={this.logingHandler}
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
