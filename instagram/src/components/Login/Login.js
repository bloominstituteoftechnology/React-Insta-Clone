import React from 'react';

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
            <form>
                <div className="login-header">
                    <p>Authenticate, now!</p>
                </div>
                <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.changeHandler} />
                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.changeHandler} />
                <button type="submit" onClick={this.handleSubmit}>Log In</button>
            </form>
        )
    }
}

export default Login;