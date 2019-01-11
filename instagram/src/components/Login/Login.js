import React from 'react'

const Login = props => {
	return (
			<div>
				<div>LOGIN PAGE</div>
				<form>
					<input type="text" placeholder="UserName"/>
					<input type="text" placeholder="Password"/>
				</form>
				<button onClick = {props.loggingInInsta}>LOGIN</button>
			</div>
		
	)
}


export default Login;
