import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        };
    }

    handleInputChange = event => {
        this.setState({ [event.target.name] : event.taeget.value });
    };

    handleLoginSubmit = (event) => {
        const user = this.state.username;
        localStorage.setItem('user', user)
        window.location.reload();
    }

    render() {
        return (
            <div className = "form">
                <h3> Login Page...</h3>

                <form>
                    
                    <div className = "field-wrap">
                        <label>Username : </label>
                        <input 
                            type = "text"
                            name = "username"
                            value = {this.state.username}
                            onChange = {this.handleInputChange}
                        />
                    </div>
    
                    <div className = "field-wrap">
                        <label>Password : </label>
                        <input 
                            type = "password"
                            name = "password"
                            value = {this.state.password}
                            onChange = {this.handleInputChange}
                        />
                    </div>
                   
                    <button className = "button-block" onClick = {this.handleLoginSubmit}> 
                        Login 
                    </button>
                </form>
            </div>
        )
    }
}

export default Login;


