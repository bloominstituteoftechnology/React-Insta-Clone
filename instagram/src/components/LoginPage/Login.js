import React from 'react';


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: "",
        }
    }

    inputChangeHandle = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    loginButtonHandle = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render(){
        return(
            <form className="login-form">
                <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.inputChangeHandle} />
                <input type="password" placeholder="password" value={this.state.password} onChange={this.inputChangeHandle} />
                <button onClick={this.loginButtonHandle}>Login</button>
            </form>
        )
    }
}

export default Login;