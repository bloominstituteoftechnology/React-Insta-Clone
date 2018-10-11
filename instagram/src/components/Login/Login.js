import React, {Component} from 'react';
import './Login.css';
import { StyledButton } from '../../Styles';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <div className='login-form'>
      <div className='login-border'>
        <h3>Welcome to React Insta Clone</h3>
        <p>Please Login</p>
        <div>
          <input
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <br />
          <StyledButton onClick={this.handleLoginSubmit}>
            Log In
          </StyledButton>
        </div>
      </div>
      </div>
    );
  }
}

export default Login;