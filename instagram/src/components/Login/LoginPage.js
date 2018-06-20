import React from 'react';
import Login from './Login';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUser = event => {
        window.localStorage.setItem('username', event.target.value);
        this.setState({username: event.target.value})
       
      }

      handlePassword = event => {
        window.localStorage.setItem('password', event.target.value);
        this.setState({password: event.target.value})
        
      }

    logIn = (event) => {
        event.preventDefault();
        window.localStorage.setItem('username', event.target.value);
        if (window.localStorage.getItem('username')) {

        }
      }

    render (){
        return(
        <div>
            <Login handleUser={this.handleUser} handlePassword={this.handlePassword} logIn={this.logIn}/>
        </div>
        );
    }
}

export default LoginPage;

/*
window.localStorage.setItem('username', event.target.value);
        window.localStorage.setItem('password', event.target.value);*/