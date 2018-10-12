import React, { Component } from 'react';
import './Login.css';

class LoginPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    // handleUserChange = event => {
    //     this.setState({
    //         username: event.target.value})
    // }

    handleSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }


    render() {
        return (
      <form>
          <h2>Welcome to React Insta-Clone</h2>
          <p>Please Login</p>
          <input className='login' type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
          <input className='login'  type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Login</button>
        </form>
        )
    }
  };

export default LoginPage;