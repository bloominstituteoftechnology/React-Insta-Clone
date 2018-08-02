import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: "",
            password: ""
        };
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleLoginSubmit = event => {
        const user = this.state.username;
        localStorage.setItem("user", user);
        window.location.reload();
    };

    render() {
        return (
            <FormGroup>
                <Input 
                    type="text"
                    placeholder
                />
            </FormGroup>
        );
    }

}