import React from 'react';
import './Login.css';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	inputChangeHandler = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	loginSubmitHandler = event => {
		const user = this.stte.username; //username from state
		localStorage.setItem('user', user); //create item in local storage called user, set equal to username
		window.location.reload(); //force location to refresh page
	};

	render() {
		return (
			<form>
				<input
					name="username"
					type="text"
					placeholder="Username"
					value={this.state.username}
					onChange={this.state.inputChangeHandler}
				/>
				<input
					name="password"
					type="text"
					placeholder="Password"
					value={this.state.password}
					onChange={this.state.inputChangeHandler}
				/>
				<button onClick={this.loginSubmitHandler}>Login</button>
			</form>
		);
	}
}

export default Login;