import React, { Component } from 'react';
import './../../less/Login.less';

class Login extends Component {
	constructor(props) {
		super(props);
		console.log(props)
		this.state = {
			
			authenticateLogin: props.authenticateLogin,
		};
	}
	
 

	render() {
		return (
			<div className="login">
				<form onSubmit={this.state.authenticateLogin}>
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
					<button onSubmit={this.state.authenticateLogin}>Login</button>
				</form>
			</div>
		);
	}
}
export default Login;
