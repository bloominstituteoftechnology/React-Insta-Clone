import React from 'react';
import "./Login.css";

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: ""
        }
    }

    login = () => {
        localStorage.setItem("username", `${this.state.username}`);
    }

    save = event => {
        this.setState({ username: event.target.value })
    }

    render() {
        return (
            <div className="login-wrap" >
                <div className="login-welcome" >React-Insta-Clone</div>
                <form className="login-form" >
                    <input type="text" placeholder="username" onChange={this.save} />
                    <input type="text" placeholder="password" />
                    <button onClick={this.login} className="login-btn" >log in</button>
                </form>
            </div>
   
        );
    }
    
};

export default LoginPage;