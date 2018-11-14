import React from 'react';

import './LoginPage.scss';

export default class LoginPage extends React.Component {

  constructor() {

    super();

    this.state = {

      userField: '',
      passField: '',
      password: ''

    }

  }

  logIn = e => {

    e.preventDefault();

    console.log(document.activeElement.name);

    if (document.activeElement.name === 'login') {

      if (!localStorage[this.state.userField]) {

        console.log('username does not exist');

      }

      else if (this.state.password != localStorage[this.state.userField]) {

        console.log('incorrect password!');

      }

      else {

        console.log('Logged in!');
        this.props.setUsername(this.state.userField);

      }

    }

    else {

      if (!localStorage[this.state.userField]) {

        localStorage[this.state.userField] = this.state.password;
        this.props.setUsername(this.state.userField);

      }

      else {

        console.log('username taken!');

      }

    }

  }

  handleChange = e => {

    if (e.target.name == 'user-field') {

      this.setState({userField: e.target.value});

    }

    else {

      this.setState({
        password: (e.target.value[e.target.value.length - 1] != '*' && e.target.value[e.target.value.length - 1] != undefined)
        ?
        this.state.password + e.target.value[e.target.value.length - 1]
        :
        this.state.password.slice(0, -1),
        passField: e.target.value.split('').map(val => '*').join('')
      });

    }

  }

  render() {

    return (

      <div className='login'>

        <h1>Log In</h1>

        <form onSubmit={this.logIn}>

          <input
            name='user-field'
            type='text'
            placeholder='username'
            value={this.state.userField}
            onChange={this.handleChange}
            autoComplete='off'
            required
          />

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
