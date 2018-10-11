import React from 'react';
import './Login.css';
import avatar from '../../assets/avatar.png';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	recordAuth = (event) => {
		const user = this.state.username;
		const pw = this.state.password;
		localStorage.setItem('username', user);
		localStorage.setItem('password', pw);
		window.location.reload();
	};

	render() {
		return (
			<div className="container">
				<div className="welcomeHeader">
					<img src={avatar} alt="instagram logo" />
				</div>
				<form className="userAuth">
					<label htmlFor="Please Login" />
					<p>Enter your username:</p>
					<input
						className="userName"
						type="text"
						placeholder="username"
						name="username"
						onChange={this.changeHandler}
						value={this.state.username}
					/>
					<p>Enter your password:</p>
					<input
						className="password"
						type="text"
						placeholder="password"
						name="password"
						onChange={this.changeHandler}
						value={this.state.password}
						type="password"
					/>
					<button onClick={this.recordAuth}>login</button>
				</form>
				<div className="signUpToday">
					Sign up today for <span className="free">free</span>!!
				</div>
			</div>
		);
	}
}

export default Login;
