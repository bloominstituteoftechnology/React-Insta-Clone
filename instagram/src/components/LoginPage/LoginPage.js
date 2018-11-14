import React, {Component} from 'react';
import Authenticate from './../Authentication/Authenticate';
import './../../less/Login.less'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            usernameInput: props.usernameInput,
            passwordInput: props.passwordInput,
            authenticateLogin: props.authenticateLogin,
            handleChange: props.handleChange
        }
    }


	render() {
		return (
			<div className="login">
                <form onSubmit={this.state.authenticateLogin}>
                    <input 
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.usernameInput}
                    onChange={(event) => {
                        this.state.handleChange(event);
                    }}
                    />
                   
                   <input 
                    type="text"
                    name="password"
                    placeholder="password"
                    value={this.state.passwordInput}
                    onChange={(event) => {
                        this.state.handleChange(event);
                    }}
                    />
                   <button>Login</button>
                </form>
			</div>
		);
	}
}
export default Authenticate(Login);