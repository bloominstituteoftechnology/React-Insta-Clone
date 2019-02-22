import React from "react"
import styled from "styled-components";

//login page requests the user to login and persist the users name in local storage

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
`
const Button = styled.button`
    background-color: blue;
    color: white;
    border-radius: 5px;
    max-width: 200px;
    width: 30%;
    margin-top: 5px;

    :hover {
        background-color: white;
        color: blue;
        border: 1px solid blue;
    }
`

const Input = styled.input`
    width: 30%;
    maxwidth: 400px;
    margin: 2px 0;
`
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            username: "",
            password: "",
        }
    }
    handelInput = (event) => {
        this.setState({
            username: event.target.value,
        })
        
    }
    submitLogin = () => {
        let user = this.state.username
        localStorage.setItem("user", user)
        window.location.reload()
    }
    render() {
        return (
            <LoginContainer>
                <h1>Welcome to Instagram-Clone</h1>
                <h2>Please Login</h2>
                <Input
                    tyep="text"
                    placeholder="Username"
                    onChange={this.handelInput}>
                </Input>
                <Input 
                    type="password"
                    placeholder="Password"
                    onKeyDown={(event) => {
                        if (event.keyCode === 13) {
                            event.preventDefault()
                            this.submitLogin()
                        }}
                    }>
                </Input>
                <Button
                    onClick={this.submitLogin}>
                    Login
                </Button>
            </LoginContainer>
        )
    }
}

export default Login;