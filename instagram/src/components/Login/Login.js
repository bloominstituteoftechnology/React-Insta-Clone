import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    inputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    loginHandle = () => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };
    render() {
        return(
            <form className="login-form">
            <h1>Log in!</h1>
                <input type="text" 
                    name="username" 
                    placeholder="username"
                    value={this.state.username} 
                    onChange={this.inputChange}
                />

                <input type="password" 
                    name="password" 
                    placeholder="password"
                    value={this.state.password} 
                    onChange={this.inputChange}
                />
                <button onClick={this.loginHandle}>Login</button>
            </form>
        );
    }
}
export default Login;