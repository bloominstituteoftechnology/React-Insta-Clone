import React from 'react';
import mainimage from '../../assets/mainimage.PNG'
import styled from 'styled-components';

const LoginContainer = styled.div`
    height: 100vh;
    background-color: #FAFAFA;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Form = styled.div`
    width: 400px;
    border: 1px solid #E6E6E6;
    background-color: white;
    height: 450px;
`

const Welcome = styled.h2`
    font-family: Pacifico;
    padding-top: 30px;
    text-align: center;
    font-size: 30px;
    padding-bottom: 0;
    margin-bottom: 0;
    
`

const LoginInput = styled.input`
    height: 25px;
    width: 80%;
    margin-bottom: 5px;
    background-color: #FAFAFA;
    border: 1px solid #E6E6E6;
    color: black;
    text-align: center;
    &::-webkit-input-placeholder {
        color: #A5A7AA;
`

const Instaclone = styled(Welcome)`
    font-size: 40px;
    padding-top: 0;
    margin-top: 0;
`
const PleaseLogin = styled.p`
    text-align: center;
    font-size: 20px;
    margin-top: 45px;
`

const MainImage = styled.img`
    padding-right: 30px;

    @media (max-width:800px) {
        display: none;
    }
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

const LoginButton = styled.button`
    background-color: #3897F0;
    color: white;
    width: 250px;
    height: 30px;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    font-weight: bold;
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
                <MainImage src={mainimage} />
                <Form>
            <Welcome>Welcome to</Welcome> 
            <Instaclone>React Insta Clone</Instaclone>
            <PleaseLogin>Please sign in to continue.</PleaseLogin>
            <LoginForm>
                <LoginInput type="text" placeholder="User Name" name="username" value={this.state.username} onChange={this.inputHandler} />
                <LoginInput type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.inputHandler} />
                <LoginButton onClick={this.login}>Login</LoginButton>
            </LoginForm>
            </Form>
            </LoginContainer>
        )
    }
}

export default Login;