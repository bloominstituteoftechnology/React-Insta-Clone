// In your components directory, create a directory called Login and add a new file called Login.js.
// There should be a username input, a password input, and a Login button.
// The component should invoke the login function in app.js when a user logs in.
// This login function should set a username on localStorage. You'll need to check local storage to see if a user is logged in.
// Be sure to force the page to reload when a user logs in so that our component un-mounts and mounts again.

import React, { Component } from 'react';
import './Login.css';
//first run $ yarn add styled-components in terminal
import styled from 'styled-components';

//first run $ yarn add bootstrap reactstrap in terminal
// import { Button } from 'reactstrap';
// import { Input } from 'reactstrap';

//Using an individually styled component
const Header = styled.header `
    height:  100px;
    font-weight: lighter;
    font-size: 45px;
    font-weight: 100;
`;

const Input = styled.input `
    padding: 20px;
    font-size: 20px;
    width: 390px;
    border-radius: 8px;
    border: 1px solid grey;
    margin: 12px;
    font-weight: 100;
`;

const Button = styled.button`
    margin-top: 40px;
    height: 65px;
    width: 275px;
    border-radius: 10px;
    font-size: 30px;
    font-weight: 100;
    background-color:rgb(207, 240, 245);
    border: 1px solid white;
`;


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
                <Header className = "login-welcome">Welcome, Please Login</Header>  
                </div>

            {/* spaces for inputting username and password */}

                <div className = "login-credentials">
                    <div className = "username">
                        <Input type="text" 
                        placeholder = "User Name"
                        name = "username" 
                        value = {this.state.username} 
                        onChange = {this.handleInputChange} />
                    </div>

                    <div className = "password">
                        <Input type="text" 
                        placeholder = "Password"
                        name = "password" 
                        value = {this.state.password} //password same as username
                        onChange = {this.handleInputChange} />
                    </div>
                </div>

            {/* button for submitting login credentials */}



                <div>
                    <Button className = "submit-button" onClick = {this.handleSubmit}>
                        submit
                    </Button>
                </div>
            </div>
        );
    }
}

export default Login;