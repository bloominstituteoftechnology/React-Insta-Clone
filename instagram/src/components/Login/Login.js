import React, {Component} from 'react';
import './Login.css';
// import Authenticate from '../Authentication/Authenticate';

class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            username:'',
            password:''
        }
    }
    handleInput= event =>{
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
    }

    handleLoginSubmit = event =>{
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
        window.location.reload();
    }

    render(){
        return(
            <div className="login-page">
                <form className="login-container">
                <img alt="instagram logo" src="https://rawgit.com/LambdaSchool/React-Insta-Clone/4079cf6fb6d11bd3ad7a422cdec35e0aab4e2bfe/instagram/src/assets/iglogo.png" className="IGlogo" width="100%"/>
                    <input  className="usernameClass"
                            type="text"
                            name="username" 
                            value={this.state.username}
                            placeholder='Phone number, username, or email'
                            onChange={this.handleInput} />
                    <input  className="passwordClass"
                            type="text"
                            name="password"
                            placeholder='Password' 
                            value={this.state.password}
                            onChange={this.handleInput} />
                    <button className="login-button"  
                            onClick={this.handleLoginSubmit}>
                            Login</button>
                </form>
            </div>
        );
    }
}

export default Login;