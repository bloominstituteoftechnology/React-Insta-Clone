import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
    height: 100vh;
    background-color: #E6E6E6;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Form = styled.div`
    width: 400px;
    border: 1px solid darkgray;
    background-color: white;
    height: 450px;
`

const Welcome = styled.h2`
    
`

const SearchInput = styled.input`
    height: 25px;
    margin-bottom: 5px;
    background-color: #FAFAFA;
    border: 1px solid #E6E6E6;
    color: black;
    text-align: center;
    &::-webkit-input-placeholder {
        color: #A5A7AA;
`

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    inputHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    login = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render(){
        return(
            <LoginContainer>
                <Form>
            <Welcome>Welcome to React Insta Clone</Welcome>
            <p>Please sign in to continue.</p>
            <form>
                <input type="text" placeholder="User Name" name="username" value={this.state.username} onChange={this.inputHandler} />
                <input type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.inputHandler} />
                <button onClick={this.login}>Login</button>
            </form>
            </Form>
            </LoginContainer>
        )
    }
}

export default Login;