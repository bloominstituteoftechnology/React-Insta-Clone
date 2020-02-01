import React from 'react';

function LoginPage(props) {
  return (
	<div className="login-page-container">
		<div className="login-form-container">
			<input className="login-username" type="text" placeholder='Username'></input>
			<input className="login-password" type="text" placeholder='Password'></input>
			<button className="login-button" onClick={props.onClick}>Login</button>
		</div>
	</div>
  );
}

export default LoginPage;