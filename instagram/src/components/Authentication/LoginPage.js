import React from 'react';

import WarningMessage from './WarningMessage';

import './LoginPage.scss';

export default class LoginPage extends React.Component {

  constructor() {

    super();

    this.state = {

      userField: '',
      passField: '',
      password: '',
      showUserMessage: false,
      showPassMessage: false,
      userMessage: '',
      passMessage: ''

    }

  }

  logIn = e => {

    e.preventDefault();

    if (document.activeElement.name === 'login') {

      if (!localStorage[this.state.userField]) {

        this.setState({showUserMessage: true, userMessage: 'invalid username!'});

      }

      else if (this.state.password != localStorage[this.state.userField]) {

        this.setState({showPassMessage: true, passMessage: 'invalid password!'});

      }

      else {

        this.props.setUsername(this.state.userField);

      }

    }

    else {

      if (!localStorage[this.state.userField]) {

        localStorage[this.state.userField] = this.state.password;
        this.props.setUsername(this.state.userField);

      }

      else {

        this.setState({showUserMessage: true, userMessage: 'username already taken!'});

      }

    }

  }

  handleKeyPress = e => {

    if (e.charCode === 13) {
      document.querySelector('button[name="login"]').focus();
    }

  }

  handleChange = e => {

    if (e.target.name == 'user-field') {

      if (this.state.showUserMessage)
        this.setState({showUserMessage: false});

      this.setState({userField: e.target.value});

    }

    else {

      if (this.state.showPassMessage)
        this.setState({showPassMessage: false});

      let newPassword = '';

      if (e.target.value == '')
        newPassword = '';

      else if (e.target.value[e.target.value.length - 1] != '*' && e.target.value[e.target.value.length - 1] != undefined)
        newPassword = this.state.password + e.target.value[e.target.value.length - 1];

      else
        newPassword = this.state.password.slice(0, -1);

      this.setState({
        password: newPassword,
        passField: e.target.value.split('').map(val => '*').join('')
      });

    }

  }

  render() {

    return (

      <div className='login'>

        <h1>Log In</h1>

        <form onKeyPress={this.handleKeyPress} onSubmit={this.logIn}>

          {this.state.showUserMessage ? <WarningMessage text={this.state.userMessage} /> : null}

          <input
            name='user-field'
            type='text'
            placeholder='username'
            value={this.state.userField}
            onChange={this.handleChange}
            autoComplete='off'
            required
          />

          {this.state.showPassMessage ? <WarningMessage text={this.state.passMessage} /> : null}

          <input
            name='pass-field'
            type='text'
            placeholder='password'
            value={this.state.passField}
            onChange={this.handleChange}
            autoComplete='off'
            required
          />

          <button name='login' type='submit'>Log In</button>
          <button name='signup' type='submit'>Sign Up</button>

        </form>

      </div>

    );

  }

}
