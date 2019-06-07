import React from 'react';
import './login.css';
import {Button, Login, LoginContainer, LoginInput, Insta, Logo} from './LoginStyle';

//---------------Start of Class---------------------------//
class LoginForm extends React.Component {
  state = {
    password: '',
    username: ''
  };

  onHandleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  login = event => {
    const credentials = {
      username: this.state.username,
      password: this.state.password
    };
    localStorage.setItem('user', JSON.stringify(credentials));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <LoginContainer>
            <Insta>
              <Logo>Instagram</Logo>
              <i class='fab fa-instagram fa-5x' />
            </Insta>
            <Login>
              <div className='username'>
                <LoginInput type='text' placeholder='username' value={this.state.username} name='username' onChange={this.onHandleChange} />
              </div>

              <div className='password'>
                <LoginInput type='text' placeholder='password' value={this.state.password} name='password' onChange={this.onHandleChange} />
              </div>

              <Button>Log In</Button>
            </Login>
          </LoginContainer>
        </form>
      </div>
    );
  }
}

export default LoginForm;
