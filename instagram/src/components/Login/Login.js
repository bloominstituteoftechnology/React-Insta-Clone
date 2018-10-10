import React from 'react';
import App from '../../App';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    render() {
        return (
            <div className="login">
                <form className="login-form">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;

// invokes the App.login() function once the user logs in (on form submit?)