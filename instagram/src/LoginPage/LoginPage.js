import React from 'react';
import './LoginPage.css';
import logo from '../img/1024px-Instagram_logo.svg.png';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    handlesUsernameChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // showAsStars = event => {
    //     let totalStars = '',
    //     for (i = 0; i <= event.target.value.length; i++) {
    //         totalStars += '*';
    //     }

    //     return totalStars;
    // }

    handlesPasswordChange = event => {
        this.setState({
            [event.target.name]: this.showAsStars(event.target.value)
        })
    }

    setUsername = () => {
        if (this.state.username !== '' && this.state.password !== '') {
            localStorage.setItem('username', JSON.stringify(this.state.username));

            this.setState({
                username: '',
                password: '',
                userLoggedIn: true,
            })

            window.location.reload();
        } else {
            alert(`Incorrect username and/or password!`);
        }
    }

    render() {
        return(
            <div className="login-container">
                <form className="login-form" onSubmit={this.setUsername}>
                <img src={logo} className="instagram-logo-text" alt="Instagram Logo"/>
                    <div className="input-container">
                        <input 
                            className="login-input input-username" 
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handlesUsernameChange}
                            required
                        />
                        <label>Phone number, username, or email</label>
                    </div>
                    <div className="input-container">
                        <input 
                            className="login-input input-password" 
                            type="text"
                            name="password"
                            value={this.state.password}
                            onChange={this.handlesUsernameChange}
                            required
                        />
                        <label>Password</label>
                    </div>
                    <button className={this.state.password || this.state.username ? "login-button unfaded" : "login-button"} type="submit">Log in</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;