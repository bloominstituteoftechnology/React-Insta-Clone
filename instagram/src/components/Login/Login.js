import React from 'react'
import styled from 'styled-components'
const Button = styled.button `
border: 1px solid black ;
background: transparent ;


`
const Container = styled.div `
display: flex ;
justify-content: space-around ;
height: 25px;
align-items: center ;
`

const Form = styled.form `
display: flex;
justify-content: space-between ;
`
class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    LoginSubmit = () => {
     if(this.state.username && this.state.password){
         localStorage.setItem("user", this.state.username)
         localStorage.setItem("password", this.state.password)    
         window.location.reload();
        }
        }
    LoginHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        return(
            <Container>
            <Form onSubmit={this.LoginSubmit} >
                <input name="username" value={this.state.username} onChange={this.LoginHandler} />
                <input name="password" value={this.state.password} onChange={this.LoginHandler} />
                <Button type="submit" >Submit</Button>
            </Form>
           
            </Container>
            )
    }
}

export default Login 