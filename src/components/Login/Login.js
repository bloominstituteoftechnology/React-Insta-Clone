import React from 'react'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  handleSubmit = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login = () => {
    this.props.login(this.state.username)
  }

  render() {
    return (
      <form className="Login" onSubmit={this.login}>
        <input 
          name="username"
          type="text"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleSubmit}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleSubmit}
        />
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default Login