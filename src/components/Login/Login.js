import React, { Component } from 'react';
import './Login.css';
import logo from '../../logos/instalogo.png';
import bar from '../../logos/bar.png';
import appstore from '../../logos/appstore.png';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username:""
        };
    }

    handleInputChange = event => {
        
        this.setState({ [event.target.name]: event.target.value}); 
    }

    handleLogin = event => {
        event.preventDefault();
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render(){
        return(
            <div className="page">

                <div className="form" >

                    <div className="center">
                        <div className="headerLogo">
                                <img src={logo} ></img>
                        </div>
                        
                        <div className="h2-words">
                            <h2>Sign up to see photos and videos from your friends.</h2>
                        </div>

                        <div className="bar-div">
                            <img className="bar-bar" src={bar}></img>
                        </div>
                        
                        <div>
                            
                            
                            <div>
                                <form>
                                    <h2 className="h2-word">Username</h2>
                                    <input className="Username username-form" name="username" type="text" onChange={this.handleInputChange} value={this.state.username}></input>
                                    <h2 className="h2-word">Password</h2>
                                    <input className="Username username-form" name="password" type="text"></input>
                                    <button onClick={this.handleLogin}  className="signin-button">Sign up</button>
                                </form>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <img className="appstore" src={appstore}></img>
                </div>
                    
                


            </div>
            
        );
    }
    

};

export default Login;