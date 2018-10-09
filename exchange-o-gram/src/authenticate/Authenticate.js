import React from 'react';
import App from '../App.js';
import Login from '../components/Login/Login.js';

const authenticate = AppPage => SignIn =>{
    return (
        class extends React.Component{
            constructor(){
                super();
                this.state = {
                    loggedIn: false
                }
            }

            setLoggedIn = (isLoggedIn)=>{
                this.setState({
                    loggedIn: isLoggedIn
                })
            }

            render(){
                return (
                    this.state.loggedIn ? <AppPage/> : <SignIn setLoggedIn={this.setLoggedIn}/>      
                )
            }
        }
    )
}

const Authenticate = authenticate(App)(Login);

export default Authenticate;