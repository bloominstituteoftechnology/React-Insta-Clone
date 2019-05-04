import React, { Component } from 'react';
import styled from 'styled-components'

const WrapperDiv = styled.div`
   font-family: sans-serif;
   text-align: center;
   margin-top: 200px;
`
const WrapperForm = styled.div `

  display: flex;
  justify-content: center;
  justify-content: space-between;
  width: 350px;
  margin: 0 auto;
  margin-bottom: 5px;

`

const Input = styled.input `

`

const Button = styled.button `
  width: 350px;
  height: 50px;
  background: white;
  border: none;
  border-radius: 3px;
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
     <h2>Instagram (clone) </h2>
     

     <form>
     <WrapperForm>
         <Input placeholder= "Username" type="text" name="username" value = {this.state.username} onChange= {this.handleInputChange}></Input>
         <Input placeholder= "Password" type="text" name="password" value = {this.state.password} onChange= {this.handleInputChange}></Input>
     </WrapperForm>
         <Button onClick={this.handleLoginSubmit}>Log In</Button>

     </form>

    </WrapperDiv>
    )
    }
}

export default Login