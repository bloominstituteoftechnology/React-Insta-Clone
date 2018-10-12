import React from 'react';
import './Login.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInput = event => {
      this.setState( {[event.target.name]: event.target.value} );
  };

  handleSubmit = event => {
    event.preventDefault();

    const username = this.state.username;
    localStorage.setItem('user', username);

    const password = this.state.password;
    localStorage.setItem('password', password);

    window.location.reload();

  };


  render () {
    return(
      <div className = 'login-container'>
        <form className = 'form-container'>

          <input className = 'inputUSER'
                 placeholder = 'enter username'
                 value = {this.state.username}
                 name = 'username'
                 onChange = {this.handleInput}
          />

          <input className = 'inputPASSWORD'
                 type = 'password'
                 placeholder = 'enter password'
                 name = 'password'
                 onChange = {this.handleInput}
          />

          <button onClick = {this.handleSubmit}> Log In </button>

        </form>

      </div>

    )

  }
}

export default LoginPage;