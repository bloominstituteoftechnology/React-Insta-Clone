import React from 'react';
import './Login.css';
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

    logIn = () => {
        window.localStorage.setItem('username', this.state.username);
        window.location.reload();
      }


    render (){
        return(
            <div className='outer-container'>
            <div className='login-container'>
            <img className='login-logo' src='http://www.brandchannel.com/wp-content/uploads/2016/05/instagram-old-log-wordmark.jpg' />
        <div className='login-box'>
            <Login handleUser={this.handleUser} handlePassword={this.handlePassword} logIn={this.logIn}/>
        </div>
        </div>
        </div>
        );
    }
}

export default LoginPage;

/*
window.localStorage.setItem('username', event.target.value);
        window.localStorage.setItem('password', event.target.value);*/