import React from 'react';
import * as login from './loginComponents.js';

class Login extends React.Component {
    constructor(props) {
        super(...arguments);
        this.state = {
            usernameInput: '',
            passwordInput: ''
        }
    }
    render() {
        return (
            <login.Container className="login-container">
                <login.Form onSubmit={this.submit}>
                    <h2>Login</h2>
                    <login.Label>User <login.Input
                        data-property="usernameInput"
                        type="text"
                        value={this.state.usernameInput}
                        onChange={this.typeChange}
                    /></login.Label>
                    <login.Label>Password <login.Input
                        data-property="passwordInput"
                        type="password"
                        value={this.state.passwordInput}
                        onChange={this.typeChange}
                    /></login.Label>
                    <login.Button>Submit</login.Button>
                </login.Form>
            </login.Container>
        )
    }

    //------------------------------------------------
    typeChange = eventChange => {
        let newValue = eventChange.target.value;
        let changeProperty = eventChange.target.dataset.property;
        let stateObject = {};
        stateObject[changeProperty] = newValue;
        this.setState(stateObject);
    }
    submit = eventSubmit => {
        if(!this.state.passwordInput){ return;}
        if(!this.state.usernameInput){ return;}
        window.localStorage.setItem('user', this.state.usernameInput);
    }
}

export default Login;
