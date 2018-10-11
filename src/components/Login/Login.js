import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
        }
    }

    submitHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    login = () => {
        // let user = JSON.parse(localStorage.getItem('user'));

        // if (!user) {
        //     localStorage.setItem('user', this.state.username) // https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
        // }

        // console.log(this.state.username)
        // window.location.reload();
        this.props.login()
    }

    render() {
        return (
           <form onSubmit={this.login}>
                <input name="username" type="text" placeholder="username" value={this.state.username} onChange={this.submitHandler} />
                <input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.submitHandler} />
                <button type="submit">Login</button>
            </form>
        )
    }
}

export default Login;