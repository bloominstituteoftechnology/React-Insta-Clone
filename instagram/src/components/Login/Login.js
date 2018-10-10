import React from 'react';
import './Login.css';

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
            <div className="login-container">
                <form onSubmit={this.submit}>
                    <h2>Login</h2>
                    <label>User <input
                        data-property="usernameInput"
                        type="text"
                        value={this.state.usernameInput}
                        onChange={this.typeChange}
                    /></label>
                    <label>Password <input
                        data-property="passwordInput"
                        type="password"
                        value={this.state.passwordInput}
                        onChange={this.typeChange}
                    /></label>
                    <button>Submit</button>
                </form>
            </div>
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
