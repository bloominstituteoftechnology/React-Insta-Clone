import React, { Component } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import './Login.css'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
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

  render () {
    return (
      <Form className='login-form'>
        <h3>Welcome to React Insta Clone</h3>
            <div>Please Login</div>
            <FormGroup>
                <Input
                    type='text'
                    placeholder='Enter username'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />
                <Button color='success' size='large' onClick={this.handleLoginSubmit}>
                    Log In
          </Button>
            </FormGroup>
            <FormGroup>
                <Input
                    type='password'
                    placeholder='Enter password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                />
        </FormGroup>
      </Form>
    )
  }
}

export default Login
