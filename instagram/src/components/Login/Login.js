import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';

const Lgnpgctnr = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: absolute;
    background-color: #f5f5f5;
`;

const Sbctnr = styled.div`
    width: 30%;
    padding: 5% 0%;
    margin: 10% auto;
    border: 1px dashed black;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;    

    @media (max-width: 800px) {
        width: 60%;
    }
`;

const MainTitle = styled.h1`
    margin-top: -5%;
    font-family: "Oleo Script", cursive;
    font-size: 3rem;

    @media (max-width: 800px) {
        margin-top: 0;
    }
`;

const SubTitle = styled.h4`
    font-size: 1rem;
    a {
        text-decoration: none;
    }
`;

const LgnfrmGrp = styled(FormGroup)`
    padding: 5% 0%;
    margin: 10% 0%;
`;

const LgnfrmIpt = styled(Input)`
    padding: 5%;

    if ()
`

const LgnBtn = styled(Button)`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    outline: none;

    &:hover {
        cursor: pointer;
    }
`

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    }

    handleLoginSubmit = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render() {
        return (
            <Lgnpgctnr>
                <Sbctnr>
                <MainTitle>Instagram</MainTitle>
                <SubTitle><a href="#!">Log In</a> or <a href="#!">Sign Up</a></SubTitle>
                <Form>
                <LgnfrmGrp>
                 {/* <Label for="username">Username: </Label> */}
                <LgnfrmIpt
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={this.state.username}
                    onChange={this.handleInputChange}/>
                </LgnfrmGrp>
                <LgnfrmGrp>
                {/* <Label for="password">Password: </Label> */}
                <LgnfrmIpt
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={this.state.password}
                    onChange={this.handleInputChange}/>
                </LgnfrmGrp>
                </Form>
                <LgnBtn onClick={this.handleLoginSubmit}>Log In</LgnBtn>
                </Sbctnr>
            </Lgnpgctnr>
        )
    }   
}

export default Login;