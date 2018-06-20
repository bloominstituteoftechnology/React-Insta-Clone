import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            userName: this.getUserName(),
            password: ''
        }
    }

    getUserName = () => {
        return localStorage.getItem("userName") === null ?  "" :  localStorage.getItem("userName");
    }

    render(){
        return (
            <div className="login">
               UserName: <input className="user-name"
                                type="text"
                                value={this.state.userName} />
                Password: <input type="password"/>
                <button>Login</button>
            </div>
        );
    }

}

export default Login;