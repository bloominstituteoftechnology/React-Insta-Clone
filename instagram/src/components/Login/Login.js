import React from 'react';
import './login.css'

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			login: '',
		};
	}

	loginNameHandler = event => {
		this.setState({
			name: event.target.value,
		})
	}

	loginPassHandler = event => {
		this.setState({
			login: event.target.value,
		})
	}

	login = event => {
		localStorage.setItem(this.state.name, this.state.login)
	}

	render(){
		return (
		<div className="login-div">
			<form>
				<input placeholder="user name" value={this.state.name} onChange={this.loginNameHandler} />
				<input placeholder="password" value={this.state.login} onChange={this.loginPassHandler} />
				<button onClick={this.login}>Login</button>
			</form>
		</div>
		)
	}
}

export default Login;