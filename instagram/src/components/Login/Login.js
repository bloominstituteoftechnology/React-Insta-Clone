import React from 'react'

const Login = props => {
	return (
			<div className='mainLogin'>
				<div className='boxLogin'>LOGIN PAGE
				<form>
					<input type="text" placeholder="UserName"/>
					<input type="text" placeholder="Password"/>
				</form>
				<button onClick = {props.loggingInInsta}>LOGIN</button>
				</div>
			</div>
		
	)
}


export default Login;
