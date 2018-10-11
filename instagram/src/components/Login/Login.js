import React from 'react';
import styled from 'styled-components'
import { InputForm, LoginLabel, SubmitButton } from './LoginForm'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  handleLoginInput = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  handlePasswordInput = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <div className={this.props.className} >
        <LoginLabel>Username</LoginLabel>
        <InputForm onChange={this.handleLoginInput} />
        <LoginLabel>Password</LoginLabel>
        <InputForm onChange={this.handlePasswordInput} />
        <SubmitButton onClick={this.props.handleLogin}>Submit</SubmitButton>
      </div>
    );
  }
}

const StyledLogin = styled(Login)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: grey;
  width: 80%;
`

export default StyledLogin;