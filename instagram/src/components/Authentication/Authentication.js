import React, { Component } from 'react'

const authentication = (App) =>
  class extends Component {
    constructor () {
      super()
      this.state = {
        username: '',
        password: ''
      }
    }

    handleSubmitLogIn = ({ target }) => {
      const { username, password } = target
      localStorage.setItem('username', JSON.stringify(username.value))
      localStorage.setItem('password', JSON.stringify(password.value))
      this.setState({
        username: '',
        password: ''
      })
    }

    logInput = ({ target }) => {
      const { name, value } = target
      this.setState({
        [name]: value
      })
    }

    render () {
      if (
        localStorage.getItem('username') &&
        localStorage.getItem('password')
      ) {
        return <App />
      } else {
        return (
          <form type='submit' onSubmit={this.handleSubmitLogIn}>
            <input
              placeholder='Phone Number, username, or email'
              type='text'
              name='username'
              onChange={this.logInput}
              value={this.state.username}
              className='comment-input'
              required
            />
            <input
              placeholder='Password'
              type='password'
              name='password'
              onChange={this.logInput}
              value={this.state.password}
              className='comment-input'
              required
            />
            <button type='submit'>Log In</button>
          </form>
        )
      }
    }
  }

export default authentication
