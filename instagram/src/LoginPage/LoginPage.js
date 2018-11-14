import React from 'react';

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
        if (this.state.username != '' && this.state.password != '') {
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
            <div className="Login-container">
                <form onSubmit={this.setUsername}>
                    <input 
                        className="login-input" 
                        type="text"
                        name="username"
                        placeholder="Phone number, username, or email"
                        value={this.state.username}
                        onChange={this.handlesUsernameChange}
                    />
                    <input 
                        className="login-input" 
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handlesUsernameChange}
                    />
                    <button className="login-button" onClick="submit">Log in</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;