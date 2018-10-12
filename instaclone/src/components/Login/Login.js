import React, { Component } from 'react';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			userInput: '',
			passInput: ''
		};
	}
	inputHandler = event => {
		this.setState({ [event.target.name]: event.target.value });
  };
  
  submitHandler = event => {
    event.preventDefault();
    localStorage.setItem("username",this.state.userInput);
    window.location.reload();
  }
	render() {
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					Username
					<input
						onChange={this.inputHandler}
						type="text"
						placeholder="username"
						name="userInput"
						value={this.state.userInput}
					/>
					Password{' '}
					<input
						onChange={this.inputHandler}
						type="text"
						placeholder="password"
						name="passInput"
						value={this.state.passInput}
					/>
					<button onClic={this.submitHandler}>Login</button>
				</form>
			</div>
		);
	}
}

export default Login;
