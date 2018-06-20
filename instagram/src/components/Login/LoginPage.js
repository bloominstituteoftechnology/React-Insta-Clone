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

        this.setState({username: event.target.value})
       
      }

      handlePassword = event => {
        this.setState({password: event.target.value})
        
      }

    logIn = (event) => {
        window.localStorage.setItem('username', this.state.username);
        if (window.localStorage.getItem('username')) {
            this.forceUpdate();
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