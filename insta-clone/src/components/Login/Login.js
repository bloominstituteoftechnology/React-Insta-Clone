import React, { Component } from 'react';
import styled from 'styled-components'

const WrapperDiv = styled.div`
   font-family: sans-serif;
   text-align: center;
`
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
    <WrapperDiv>
     <h2>Login</h2>
     <form>
         <input placeholder= "Username" type="text" name="username" value = {this.state.username} onChange= {this.handleInputChange}></input>
         <input placeholder= "Password" type="text" name="password" value = {this.state.password} onChange= {this.handleInputChange}></input>
         <button onClick={this.handleLoginSubmit}>Log In</button>

     </form>
    </WrapperDiv>
    )
    }
}

export default Login