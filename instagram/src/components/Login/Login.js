import React from 'react';
import { 
  InputForm, 
  LoginLabel, 
  SubmitButton,
  MainHeader,
  FormContainer
} from './LoginForm'


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
      <FormContainer>
        <MainHeader>Insta Clone</MainHeader>
        <LoginLabel>Username</LoginLabel>
        <InputForm onChange={this.handleLoginInput} />
        <LoginLabel>Password</LoginLabel>
        <InputForm onChange={this.handlePasswordInput} />
        <SubmitButton onClick={this.props.handleLogin}>Submit</SubmitButton>
      </FormContainer>
    );
  }
}

export default Login;