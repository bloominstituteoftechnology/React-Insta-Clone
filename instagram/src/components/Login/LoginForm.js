import React from 'react';
import styled from 'styled-components'

class LoginFormClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className={this.props.className}>
        <form>
          <label>Username:</label>
          <input value={this.state.username} placeholder="username"></input>
          <label>Password:</label>
          <input value={this.state.password} placeholder="password"></input>
        </form>
      </div>
    );
  }
}
 
const LoginForm = styled(LoginFormClass)``;

export default LoginForm;