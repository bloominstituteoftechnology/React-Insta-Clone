import React, { Component } from 'react';
import LogoImg from '../Imgs/LogoImg'
import {WrapperDiv, InputStyles, FormStyles, ButtonStyles} from '../Styles'

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
    if (this.state.username.length === 0){
      alert('Please provide a username');
      return;
    } else {
      if (this.state.password.length === 0){
        alert('Please provide a password');
        return;
      }
    }
    this.props.login(this.state.username, this.state.password);
    this.setState({
      username: '',
      password: '',
    })
  }
   render(){
    return(
      <WrapperDiv login className='login'>
        <LogoImg login />
        <FormStyles login onSubmit={this.handleLogin}>
          <InputStyles
            name='username'
            type='text'
            placeholder='Username'
            value={this.state.username}
            onChange={this.handleChange}/>
            <InputStyles
              name='password'
              type='text'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleChange}/>
            <ButtonStyles login>Login</ButtonStyles>
        </FormStyles>
      </WrapperDiv>
    )
  }
}
 export default Login;