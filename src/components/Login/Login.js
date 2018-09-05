import React, { Component } from 'react';
import './Login.css';
import logo from '../../logos/instalogo.png';
import bar from '../../logos/bar.png';
import appstore from '../../logos/appstore.png';

class Login extends Component {
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
                            <h2 className="h2-word">Username</h2>
                            
                            <div className="username-form">
                                <form>
                                    <input className="Username" name="username" type="text"></input>
                                </form>
                                
                            </div>
                            
                        </div>
                        <div>
                            <h2 className="h2-word">Password</h2>   
                            <div className="username-form">
                                <input className="Username" name="username" type="text"></input>
                            </div>  
                        </div>
                        
                        <div className="sign-in">
                             <button className="signin-button">Sign up</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="appstore" src={appstore}></img>
                </div>
                    
                


            </div>
            
        );
    }
    

}

export default Login;