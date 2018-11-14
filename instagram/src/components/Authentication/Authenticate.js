import React, {Component} from 'react';
import Login from './../LoginPage/LoginPage'


const Authenticate = (Page) =>{ 
let storage = window.localStorage
    storage.setItem('username', 'cotikor')
    storage.setItem('password', 'password1')


   return class extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginSuccessful: false,
            usernameInput: '',
            passwordInput: ''
        }
    }

    authenticateLogin(){
       
        if (this.state.usernameInput === storage.getItem('username') && this.state.passwordInput === storage.getItem('password')){
            return (
             this.setState({
                 loginSuccessful: true
             })   
            )
        }  else {
            return (
                this.setState({
                    loginSuccessful: false
                })
            )
        }
    }

        render() {
            console.log(this.state.usernameInput)
            if (this.state.loginSuccessful === true) {
                return (
                    <Page />
                )  
            } else {
                return (
                    <Login usernameInput={this.state.usernameInput} passwordInput={this.state.passwordInput} />
                )
            }
        }
    }
}

export default Authenticate