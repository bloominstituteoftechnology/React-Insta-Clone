import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: ""
         };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = () => {
        const user = this.state.username;
        localStorage.setItem("user", user);
        window.location.reload();
    }

    render() { 
        return ( 
            <form>
                <div className="login-message">
                    <p>Login</p>
                </div>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button
                    type="submit"
                    onClick={this.handleSubmit}
                >Login</button>
            </form>
         );
    }
}
 
export default Login;