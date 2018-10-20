import React from 'react';

export default class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    setUsername = (e) => {
        const {value} = e.target;
        this.setState({
            username: value
        })
    }

    setPassword = (e) => {
        const {value} = e.target;
        this.setState({
            password: value
        })
    }

    login = (e) => {
        e.preventDefault();
        localStorage.setItem("username", this.state.username);
        window.location.reload();
    }

    render(){
        return(
            <div className="login">
    
                <input type="text" placeholder="Username" onChange={this.setUsername} ></input>

                <input type="text" placeholder="Password" onChange={this.setPassword} ></input>

                <h1>{this.state.username} {this.state.password}</h1>
                <button onClick={this.login} >Login</button>

            </div>
        )
    }
}
