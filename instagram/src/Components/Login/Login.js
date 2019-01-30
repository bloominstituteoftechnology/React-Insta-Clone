import React, { Component } from 'react'
import styled from 'styled-components'

const LoginContainer = styled.div``

class Login extends Component {
	state = {
		username: '',
		password: ''
	}
	userLogin = event => {
		const userName = event.target.value
		this.setState({ username: userName })
		// localStorage.setItem('username', userName)
	}

	userPassword = event => {
		const userPassword = event.target.value
		this.setState({ password: userPassword })
		// localStorage.setItem('password', userPassword)
	}

	loginSubmit = () => {
		localStorage.setItem('username', this.state.username)
		localStorage.setItem('password', this.state.password)
		window.location.reload(true)
	}

	render() {
		return (
			<LoginContainer>
				<h1>Instagram</h1>
				<form onSubmit={this.loginSubmit} action="">
					<input
						onChange={this.userLogin}
						type="text"
						value={this.state.username}
					/>
					<input
						onChange={this.userPassword}
						type="password"
						value={this.state.password}
					/>
					<button>Login</button>
				</form>
			</LoginContainer>
		)
	}
}

export default Login
