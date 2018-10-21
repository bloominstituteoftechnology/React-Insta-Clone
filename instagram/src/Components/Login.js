import React from 'react';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: '',
        }
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    submitLogin = () => {
        const user = this.state.username;
        const password = this.state.password;
        window.localStorage.setItem('user', user);
        window.localStorage.setItem('password', password);
        window.location.reload();
    }


    render() { 
        return ( 
            <div className="login-container">
                <div className="header">
                    <h2 className="login-header">Instagram</h2>
                </div>
                <form className="login-form" onSubmit={this.submitLogin}>
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.inputHandler}/>
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.inputHandler}/>
                    <button type="submit" className="button">Login</button>
                </form>   
            </div>
        );
    }
}

export default Login;