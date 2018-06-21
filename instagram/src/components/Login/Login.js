import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    changeHandler = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = () => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render() {
        return (
            <div className="container">
                <form className="login-form">
                    <div className="login-form-content">
                        <div className="login-header">
                            <p>Instagram</p>
                        </div>
                        <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.changeHandler} />
                        <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.changeHandler} />
                        <button type="submit" onClick={this.handleSubmit}>Log In</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;