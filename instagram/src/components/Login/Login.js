import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    usernameChangeHandler = (event) => {
        this.setState({
             username: event.target.value
        })
    }
    
    submitLogin = () => {
        window.localStorage.setItem('username', this.state.username);
    }

    render() {
        return (
            <div className="login">
                <form className="login-form" onSubmit={this.submitLogin}>
                    <input type="text" placeholder="Username" value={this.state.username} onChange={this.usernameChangeHandler} />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;

// invokes the App.login() function once the user logs in (on form submit?)