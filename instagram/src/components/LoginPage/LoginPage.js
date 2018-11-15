import React, { Component } from 'react';
import './../../less/Login.less';

class Login extends Component {
	
	render() {
		return (
			<div className="login">
				<form onSubmit={this.props.authenticateLogin}>
					<h1>Please Log In...</h1>
					<input
						type="text"
						name="usernameInput"
						placeholder="username"
						value={this.props.usernameInput}
						onChange={this.props.handleChange}
					/>

					<input
						type="text"
						name="passwordInput"
						placeholder="password"
						value={this.props.passwordInput}
						onChange={this.props.handleChange}
					/>
					<button onSubmit={this.props.authenticateLogin}>Login</button>
				</form>
			</div>
		);
	}
}
export default Login;
