import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css';

class Login extends React.Componet {
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
		const user = this.stte.username;
		localStorage.setItem('user', user);
		window.location.reload();
	};

	render() {
		return (
			<Form className="login-form"
				<h2>Welcome to React Insta Clone</h2>
				<div>Please Login</div>
				<FormGroup>
					<Input
						type="text"
						placerholder="Username"
						name="username"
						value={this.state.username}
						onChange={this.inputChangeHandler}
					/>
				</FormGroup>
				<FormGroup
					<Input
						type="text"
						placerholder="password"
						name="password"
						value={this.state.password}
						onChange={this.inputChangeHandler}
					/>
					<br />
					<Button color="success" size="large" onClick={this.loginSubmitHandler}>
						Log In
					</Button>
				</FormGroup>
			</Form>
		);
	}
}

export default Login;