import React from 'react';
import './login.css';

import styled from 'styled-components';

const Button = styled.button`
  background: dodgerblue;
  border-radius: 5px;
  color: black
  margin: 0 1em;
  padding: 10px 20px;

`;

const input = styled.input`
  background-color: yellow;
  padding: 20px;
`;

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
          <div className='login'>
            <div className='username'>
              <input type='text' placeholder='username' value={this.state.username} name='username' onChange={this.onHandleChange} />
            </div>
            <div className='password'>
              <input type='text' placeholder='password' value={this.state.password} name='password' onChange={this.onHandleChange} />
            </div>
            <Button>Log In</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
