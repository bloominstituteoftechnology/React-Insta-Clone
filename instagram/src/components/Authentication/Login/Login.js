import React from 'react'; 
import logo from './instagramlogo.jpg';
import './Authentication.css';
import {Logo, NamePassword,LoginBorderDiv, PasswordInput} from './AuthenticatedStyledComponents.js'; 


class LoginPage extends React.Component {
    constructor(){
        super();
        this.state = {username: "", password: "", loggedIn: false}; 
    }

    handleUsernameChange = event => {
        this.setState({username: event.target.value});
    };

    handlePasswordChange = event => {
        this.setState({password:event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        const username = this.state.username.slice(); 
        const password = this.state.password.slice(); 
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        this.setState({loggedIn: true}); 
        window.location.reload(); 

    }

    render() {

        return (

            
            <LoginBorderDiv>
                <div className = "loginHeader">
                    <Logo src={logo} alt="Instagram Logo"/>
          
                </div>
                <div>
                    <form className = "credentials">
                        
                        <NamePassword>UserName</NamePassword>
                        <input onChange = {this.handleUsernameChange} type="text" value = {this.state.username}/>
                        <NamePassword>Password</NamePassword>
                        {/* <input className="passwordInput" onChange={this.handlePasswordChange} type="text" value = {this.state.password}/> */}
                        <PasswordInput onChange={this.handlePasswordChange} type="text" value = {this.state.password} />
                        <br/>
                        <button onClick ={this.handleSubmit}>Login</button>
                    </form>

                </div>
            
            </LoginBorderDiv>

        );
    }
}

export default LoginPage; 