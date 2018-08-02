import React from 'react';
import {Input, Button} from 'reactstrap';
import styled from 'styled-components';

const LoginPage = styled.div`
    max-width: 800px;
    height: 100vh;
    border: 2px solid lightgray;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 1rem 2rem;
    text-align: center;
    justify-content: space-evenly;
    background: burlywood;
`;

const LoginTitle = styled.div`
    font-family: 'Cedarville Cursive', cursive;
    font-size: 8rem;
`;

const LoginIcon = styled.span`
    font-size: 16rem;
`;

const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 200px;
    margin: 0 auto;
`;

const Login = props => {
    return(
        <LoginPage>
            <LoginTitle>Instagram</LoginTitle>
            <LoginIcon><i className="fa fa-instagram" aria-hidden="true"></i></LoginIcon>
            <LoginForm>
                <Input placeholder='Username' onChange={props.username}></Input>
                <Input placeholder='Password'></Input>
                <Button onClick={props.login}>Login</Button>
            </LoginForm>
        </LoginPage>
    )
}

export default Login;