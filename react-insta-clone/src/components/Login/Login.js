import React from "react";
import './Login.css';

class Login extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        username: "",
                        password: ""
                };
        }

        handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        //reusable input handler based on target.name
        //computed property syntax => get the computational value of [e.target.name]
        //same as this.setState({ "username": e.target.value, "password": e.target.value });
        };
        
        handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem("user", user);
        //set 'user' equal to username in local storage
        window.location.reload();
        //relaod AFTER you set the user item
        };

        render(){
                //both inputs invoke handleInputChange
                return (
                <div className="login-page">
                <input  type="text"
                        name="username"
                        className="input-field"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        />
                <input  type="password"
                        placeholder="Password"
                        name="password"
                        className="input-field"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        />
                <button className="login-button" onClick={this.handleLoginSubmit}>Login</button>
                </div>
                )
        }
}

export default Login;