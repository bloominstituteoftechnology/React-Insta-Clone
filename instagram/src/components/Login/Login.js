// In your components directory, create a directory called Login and add a new file called Login.js.
// There should be a username input, a password input, and a Login button.
// The component should invoke the login function in app.js when a user logs in.
// This login function should set a username on localStorage. You'll need to check local storage to see if a user is logged in.
// Be sure to force the page to reload when a user logs in so that our component un-mounts and mounts again.

import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

//function to deal with changing username
handleInputChange = event => {
    console.log(event.target.name, event.target.value)
    this.setState({ [event.target.name]: event.target.value });
    //
};


//function to submit handleSubmit
handleSubmit = event => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
}



    render () {
        return (
            <div className = "login-container">
                <div>
                <h3 className = "login-welcome">Welcome, Please Login</h3>  
                </div>

            {/* spaces for inputting username and password */}

                <div className = "login-credentials">
                    <div className = "username">
                        <input type="text" 
                        placeholder = "User Name"
                        name = "username" 
                        value = {this.state.username} 
                        onChange = {this.handleInputChange} />
                    </div>

                    <div className = "password">
                        <input type="text" 
                        placeholder = "Password"
                        name = "password" 
                        value = {this.state.password} //password same as username
                        onChange = {this.handleInputChange} />
                    </div>
                </div>

            {/* button for submitting login credentials */}

                <div>
                    <button className = "submit-button" onClick = {this.handleSubmit}>
                        submit
                    </button>
                </div>
            </div>
        );
    }
}

export default Login;