import React from 'react';
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    handleInputChange = event => {
        console.log('handle input change', this.props)
        this.setState({ [event.target.name]: event.target.value });
        //state was array?
    }

    handleLoginSubmit = () => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }


    render() {
        return (
            <form className="log-in-container">
                <input className="log-in"
                    type="text"
                    placeholder="username"
                    value={this.state.username}
                />
                <input className="password"
                    type="password"
                    placeholder="password"
                    value={this.state.password}
                />
                <button className="log-in-button" type="login">Log In</button>
            </form>
        )
    }
}
export default Login;
