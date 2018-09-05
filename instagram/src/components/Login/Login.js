import React from 'react';
import './Login.css';

const Login = props => {
	return (
		<form className="Login" onSubmit={props.submit}>
			<input type="text" className="username-input" placeholder="username" />
			<input type="text" className="password-input" placeholder="password" />
			<button className="login">Log In</button>
		</form>
	);
};

export default Login;
