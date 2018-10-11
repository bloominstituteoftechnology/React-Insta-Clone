import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleInputChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleLoginSubmit = e => {
        const user = this.state.username
        localStorage.setItem('user', user)
        window.location.reload()

    }
    render(){
    return (
    <div>
     <h2>Login</h2>
     <form>
         <input type="text" name="username" value="Username"></input>
         <input type="text" name="password" value="Password"></input>

     </form>
    </div>
    )
    }
}

export default Login