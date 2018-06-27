import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
		}
	}
	handleUsername = (event)=>{
		this.setState({username: event.target.value})
	}
	handlePassword = (event) =>{
		this.setState({password: event.target.value})
  	}

	onSubmit = (event) => {
		this.props.login(this.state.username, this.state.password);
	}
	render() {
		return (
			<div className="form-container">
				<h3 className="instaclone">InstaClone</h3>
				<form onSubmit={this.onSubmit} className="login">
					<label htmlFor="">User</label>
					<input value={this.state.username} onChange={this.handleUsername} placeholder="username" type="text" className="user"/>
					<label htmlFor="">Password</label>
					<input value={this.state.password} onChange={this.handlePassword} placeholder="password" type="password" className="password"/>
					<button type="submit">Login</button>
				</form>
			</div>
		);
	}
}

export default Login;