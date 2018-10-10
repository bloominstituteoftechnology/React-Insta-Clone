import React from 'react';
import './Login.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            usernameInput: '',
            passwordInput: '',
            users: []
        }

        // Create user for testing
        localStorage.setItem('userData', JSON.stringify(
            [
                {'username': 'user111', 'password': 'password'},
                {'username': 'soda_popinski', 'password': 'lovesoda'},
                {'username': 'thor', 'password': 'stormbreaker'}
            ]
        ));
    }

    componentDidMount(){
        const loadedData = JSON.parse(localStorage.getItem('userData'))
        // TODO: NO SIGN UP PAGE
        this.setState({
            users: loadedData
        })
    }

    usernameInput = (event)=>{
        event.preventDefault();
        this.setState({
            usernameInput: event.target.value
        })
    }

    passwordInput = (event)=>{
        event.preventDefault();
        this.setState({
            passwordInput: event.target.value
        })
    }

    login = (event)=>{
        for(let i = 0; i < this.state.users.length; i++){
            if(this.state.users[i].username === this.state.usernameInput &&
               this.state.users[i].password === this.state.passwordInput){
                this.props.loginUser(this.state.users[i].username);
             }
        }

        this.setState({
            usernameInput: '',
            passwordInput: ''
        })
    }

    render(){
        return(
            <div className="login">
                <h2>Please Sign In</h2>
                <div className="login-form">
                    <div className="login-input"><p className="input-label">UserName:</p><input className="input-box" onChange={this.usernameInput} placeholder="Enter username" value={this.state.usernameInput}></input></div>
                    <div className="login-input"><p className="input-label">Password:</p><input className="input-box" onChange={this.passwordInput} placeholder="Enter password" value={this.state.passwordInput}></input></div>
                    <input className="submit-button" onClick={this.login} type="submit" value="Submit"></input>
                    {this.props.displayInfo ? <p className="input-info">Please log in to search posts</p> : null}
                </div>
            </div>
        )
    }
}

export default Login;