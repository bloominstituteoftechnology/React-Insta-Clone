import React from 'react';
import './Login.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loginInput: '',
            password: ''
        }
    }

    loggingIn = event => {
        event.preventDefault();
        if(this.state.loginInput){
            localStorage.setItem('username', this.state.loginInput);
            window.location.reload();
        }
    }

    handlePasswordInput = event => {
        this.setState({password: event.target.value})
    }

    handleLoginInput = event => {
        this.setState({loginInput: event.target.value})
    }

    render(){
        return(
            <div className="login-page">
                <form>
                    <input type="text" name="Username" value={this.state.loginInput} onChange={this.handleLoginInput} placeholder="Username"/>
                    <input type="text" name="Password" placeholder="Password"/>
                    <input type="submit" onClick={this.loggingIn} value="Login" />
                </form>
            </div>
        );
    }
}

export default Login;