import React from 'react';

class Login extends React.Component {
    constructor() {
        super()
        this.state={
            username : "",
            password : ""
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const inputName = this.state.username
        localStorage.setItem('user', inputName)
        window.location.reload()
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="password" 
                        placeholder="password" 
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button>Login</button>
                </form>
            </div>
        )
    }

}

export default Login;