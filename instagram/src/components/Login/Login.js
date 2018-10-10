import React from 'react';

const Login = (props) => {
	return (
		<div>
			<form action="submit">
				<label htmlFor="Please Login" />
				<input
					type="text"
					placeholder="username"
					name="username"
					onChange={props.changeHandler}
					onSubmit={props.recordAuth}
				/>
				<input
					type="text"
					placeholder="password"
					name="password"
					onChange={props.changeHandler}
					onSubmit={props.recordAuth}
				/>
			</form>
		</div>
	);
};

export default Login;
