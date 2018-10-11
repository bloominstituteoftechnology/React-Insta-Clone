import React from 'react';
import styled from 'styled-components'
import LoginForm from './LoginForm'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <div className={this.props.className} onClick={this.props.handleLogin}>
        <LoginForm />
      </div>
    );
  }
}

const StyledLogin = styled(Login)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;

`

export default StyledLogin;