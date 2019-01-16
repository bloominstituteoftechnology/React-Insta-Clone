import React from 'react'
import PropTypes from 'prop-types'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleLogIn = (event) => {
        localStorage.setItem('username', `${this.state.username}`)
        localStorage.setItem('password', `${this.state.password}`)
        this.setState({
            username: '',
            password: ''
        })
    }
    render() {
        return (
            <div>
            <form>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick={this.handleLogIn}>Log In</button>
            </form>
            </div>
        )
    }
}

Login.propTypes = {

}

export default Login
