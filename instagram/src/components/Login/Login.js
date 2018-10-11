import React, { Component } from 'react';
import LogoType from '../Icons/LogoType'
import './Login.css'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = ({
      username: '',
      password: '',
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = event => {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password);
    this.setState({
      username: '',
      password: '',
    })
  }

  render(){
    return(
      <div className='login'>
        <LogoType className='login-logotype' />
        <form className='login-form' onSubmit={this.handleLogin}>
          <input
            name='username'
            type='text'
            placeholder='Username'
            value={this.state.username}
            isRequired={true}
            onChange={this.handleChange}/>
            <input
              name='password'
              type='text'
              placeholder='Password'
              value={this.state.password}
              isRequired={true}
              onChange={this.handleChange}/>
            <button>Log in</button>
        </form>

      </div>
    )
  }
}

export default Login;
