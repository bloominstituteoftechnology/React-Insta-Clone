import React from "react";

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
        };
        
        handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem("user", user);
        window.location.reload();
        };

        render(){
                return (
                <div>
                <input  type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        />
                <input  type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        />
                <button onClick={this.handleLoginSubmit}>Login</button>
                </div>
                )
        }
}

export default Login;