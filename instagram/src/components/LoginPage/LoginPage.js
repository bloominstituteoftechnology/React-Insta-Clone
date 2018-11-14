import React, { Component } from 'react';
import './../../less/Login.less';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			usernameInput: props.usernameInput,
			passwordInput: props.passwordInput,
			authenticateLogin: props.authenticateLogin
		};
	}
	handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    };
 

	render() {
		return (
			<div className="login">
				<form onSubmit={this.state.authenticateLogin}>
					<h1>Please Log In...</h1>
					<input
						type="text"
						name="usernameInput"
						placeholder="username"
						value={this.state.usernameInput}
						onChange={(event) => {
							this.handleChange(event);
						}}
					/>

					<input
						type="text"
						name="passwordInput"
						placeholder="password"
						value={this.state.passwordInput}
						onChange={(event) => {
							this.handleChange(event);
						}}
					/>
					<button onSubmit={this.state.authenticateLogin}>Login</button>
				</form>
			</div>
		);
	}
}
export default Login;
