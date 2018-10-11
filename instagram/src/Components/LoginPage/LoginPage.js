import React, { Component } from 'react'
import styled from 'styled-components';

const LoginFormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgb(240, 240, 240);
`

const LoginForm = styled.form`
    border: 1px solid lightgray;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 45vh;
`

const Header = styled.img`
    width: 150px;
`

const Input = styled.input`
    width: 80%;
    border: 1px solid lightgray;
    background-color: rgb(240, 240, 240);
    margin: 5px;
    padding: 5px;
`

const Button = styled.button`
    width: 80%;
    border: none;
    border-radius: 3px;
    padding: 5px;
    margin: 5px;
    background-color: #3897F0;
    color: white;
`


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    loginHandler = event => {
        const user = this.state.username
        localStorage.setItem('user', user)
        window.location.reload()
    }

    render() {
        return(
            <LoginFormContainer>
                <LoginForm>
                    <Header
                        src="https://qph.fs.quoracdn.net/main-qimg-1e96e593d6c6dfa98b7e4680058b66e4"
                        alt="ig-logo"
                    />
                    <Input 
                        className="username"
                        placeholder="username"
                        type="text"
                        name="username"
                        onChange={this.changeHandler}
                        value={this.state.username}
                    ></Input>
                    <Input
                        className="password"
                        placeholder="password"
                        type="password"
                        name="password"
                        onChange={this.changeHandler}
                        value={this.state.password}
                    ></Input>
                    <Button
                        onClick={this.loginHandler}
                    >Log in</Button>
                </LoginForm>
            </LoginFormContainer>
        )
    }
}

export default Login