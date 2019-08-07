import React, { Component } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import './Login.css'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
      username: '',
      password: '',
		}
	}

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleLoginSubmit = e => {
		const user = this.state.username
		localStorage.setItem('user', user)
		window.location.reload()
	}

	render() {
		return (
			<Form className='login-form'>
				<h3>Welcome to React Insta Clone</h3>
				<div className='sub-header'>Please Login</div>
				<FormGroup className='user-name'>
					<Input
						type='text'
						placeholder='User Name'
						name='username'
						value={this.state.username}
						onChange={this.handleInputChange}
					/>
				</FormGroup>
				<FormGroup className='password'>
					<Input
						type='password'
						placeholder='Password'
						name='password'
						value={this.state.password}
						onChange={this.handleInputChange}
					/>
					<br />
					<Button onClick={this.handleLoginSubmit}>
						Log In <span role='image' aria-label='rocket'>🚀</span>
					</Button>
				</FormGroup>
			</Form>
		)
	}
}

export default Login