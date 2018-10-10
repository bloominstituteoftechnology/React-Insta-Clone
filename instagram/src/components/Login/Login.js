import React, { Component } from 'react'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.login(this.state.username)
  }

  render() {
    const { username, password } = this.state
    const { handleChange, handleSubmit } = this

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={handleChange}
          name="username"
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
          name="password"
        />
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default Login
