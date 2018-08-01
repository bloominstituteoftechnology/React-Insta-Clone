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

//function to deal with changing input handleChange

// handleChange = event => {
//     this.setState({[event.target.name]: event.target.value});
// };

//function to submit  handleSubmit

    render () {
        return (
            <div className = "login-container">
                <div className = "login-welcome">
                <h3>Please Login to See the Latest Posts</h3>  
                </div>

            {/* spaces for inputting username and password */}

                <div className = "login-credentials">
                    <div className = "username">
                        <input type="text" 
                        placeholder = "User Name" 
                        value = {this.state.username} 
                        onChange = {this.handleChange} />
                    </div>

                    <div className = "password">
                        <input type="text" 
                        placeholder = "password" 
                        value = {this.state.username} 
                        onChange = {this.handleChange} />
                    </div>
                </div>

            {/* button for submitting login credentials */}

                <div className = "submit-button">
                    <button onClick = {this.handleSubmit}>
                        submit
                    </button>
                </div>
            </div>
        );
    }
}

export default Login;