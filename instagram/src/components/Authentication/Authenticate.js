import React, {Component} from 'react';
import Login from './../LoginPage/LoginPage'

const Authenticate = (Page) =>{ 
    let storage = window.localStorage

   return class extends Component {
    constructor(props){
        super(props);
        this.state = {
            usernameInput: '',
            passwordInput: '',
            loginSuccessful: '',
        }
    }
    componentDidMount(){
        
    }
    authenticateLogin(){
        storage.setItem('username', this.state.usernameInput)
        storage.setItem('password', this.state.passwordInput)
        if (storage.getItem('username') === 'cotikor'){
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
            console.log(storage)
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