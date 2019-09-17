import React from 'react';
import './Login.css';
import styled from 'styled-components';
const PageContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background:#8aacc8;
    width:100%;
    height:100vh;
`;
const LoginContainer = styled.form`
    display:flex;
    justify-content:center;
    text-align:center;
    background:#bbdefb;
    flex-wrap:wrap;
    align-content:center;
    height:200px;
    width:80%;
    border-radius:10px;

`;
const UsernameInput = styled.input`
    display:flex;
    text-align:center;
    height:40px;
    width:51%;
    border:none;
    border-radius:5px;
    margin-bottom:10px;
`;

const PasswordInput = styled.input`
    display:flex;
    text-align:center;
    height:40px;
    width:51%;
    border:none;
    border-radius:5px;
`;

const LoginButton = styled.input`
    display:flex;
    justify-content:center;
    height:20px;
    width:25%;
    border:none;
    border-radius:5px;
    background:white;
`;
const LineBreak = styled.div`
    display:flex;
    width:100%;
    height:2px;
    margin-bottom:10px;
`;

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loginInput: '',
            password: ''
        }
    }

    loggingIn = event => {
        event.preventDefault();
        if(this.state.loginInput){
            localStorage.setItem('username', this.state.loginInput);
            window.location.reload();
        }
    }

    handlePasswordInput = event => {
        this.setState({password: event.target.value})
    }

    handleLoginInput = event => {
        this.setState({loginInput: event.target.value})
    }

    render(){
        return(
            <PageContainer>
                <LoginContainer>
                    <UsernameInput type="text" name="Username" value={this.state.loginInput} onChange={this.handleLoginInput} placeholder="Username"/>
                    <PasswordInput type="text" name="Password" placeholder="Password"/>
                    <LineBreak />
                    <LoginButton type="submit" onClick={this.loggingIn} Value="Login"  />
                </LoginContainer>
            </PageContainer>
        );
    }
}

export default Login;