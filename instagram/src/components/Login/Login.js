import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }
    userinputHandler = (event) => {
        event.preventDefault()
        this.setState({
            username: event.target.value,
        })
    }
    LoginHandler = (event) => {
        event.preventDefault()
        const user = this.state.username;
        localStorage.setItem('username',user);
        window.location.reload();
    }
    
    render(){
        return(
            
            <form>
            <input placeholder='username' name='username' value={this.state.username} onChange={this.userinputHandler} value={this.state.username}/>
            <input placeholder='password' type='password'/>
            <button onClick={this.LoginHandler}>Login</button>
            </form>
        )
    }
}

export default Login;