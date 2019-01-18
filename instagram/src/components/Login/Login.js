import React from 'react'
import styled from 'styled-components'

const LoginPage = styled.div`
    background-color: #FAFAFA;
    height: 100vh;
    padding-top: 50px;
`
const LoginContainer = styled.div`
    width: 400px;
    margin: auto;
    border: 1px solid #E6E6E6;
    border-radius: 3px;
    background-color: white;
`
const Instagram = styled.h1`
    font-family: 'Grand Hotel', cursive;
    text-align: center;
    font-size: 4.5rem;
    color: #343434;
    letter-spacing: 1px;
    margin-bottom: 10px;
`
const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 15px;
`
const LoginInput = styled.input`
    padding: 10px;
    width: 300px;
    margin: auto;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
`
const LoginButton = styled.button`
    width: 300px;
    color: white;
    background-color: #3897F0;
    margin: auto;
    border: none;
    outline: none;
    border-radius: 4px;
    padding: 10px;
    font-size: 1.5rem;
    :active {
    transform: scale(0.99);
    }
`
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
        // this.setState({
        //     username: '',
        //     password: ''
        // })
    }
    render() {
        return (
            <LoginPage>
                <LoginContainer>
                    <LoginForm>
                        <Instagram>Instagram</Instagram>
                        <LoginInput type="text" name="username" placeholder="Fake username" value={this.state.username} onChange={this.handleChange}/>
                        <LoginInput type="text" name="password" placeholder="Fake password" value={this.state.password} onChange={this.handleChange}/>
                        <LoginButton onClick={this.handleLogIn} disabled={this.state.username ? false : true}>Log In</LoginButton>
                    </LoginForm>
                </LoginContainer>
            </LoginPage>
        )
    }
}


export default Login
