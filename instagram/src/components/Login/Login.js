import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
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

  handleSubmit = event => {                     // refactored
    event.preventDefault();
    const user = this.state.name;
    localStorage.setItem('user', user);
    window.location.reload();

  };


  render () {
    return(
      <div className = 'login-container'>
        <form className = 'form-container'>

          <input className = 'inputUSER'
                 type = 'text'
                 placeholder = 'enter username'
                 value = {this.state.username}
                 name = 'username'
                 onChange = {this.handleInput}
          />

          <input className = 'inputPASSWORD'
                 type = 'password'
                 placeholder = 'enter password'
               //  value = {this.state.password}        // this was missing
                 name = 'password'
                 onChange = {this.handleInput}
          />

          <button onClick = {this.handleSubmit}> Log In </button>

        </form>

      </div>

    )

  }
}

export default Login;