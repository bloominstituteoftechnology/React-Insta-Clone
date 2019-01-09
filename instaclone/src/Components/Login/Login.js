import React, { Component } from 'react';
//import './Login.css';
import logo from '../../imgs/instagram_logo.svg'

import styled from 'styled-components'



const LoginContainer= styled.div`
    display: flex;
    flex-direction: column;
    max-width:250px;
    margin: 0 auto;
    margin-top:10%;
`
const StyledForm= styled.form`
    padding: 5px;
    max-width:  250px;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const StyledInput= styled.input`
    width: 250px;
    height: 25px;
    padding:0px 6px;
    margin-bottom:10px;
    border:1px solid lightgray;
    border-radius:5px;
    outline: none;

    &:focus{
        border:2px solid gray;
    }
`
const SubmitButton= styled.button`
    height: 25px;
    max-width:250px;
    width: 250px;
    font-weight: bolder;
    
    border: none;
    background-color: #0097F7;
    color:white;
`
const InstagramLogo = styled.img`
    height: 50px;
`

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            password:''
        }
    }

    // this is not dry and I would like to ask how to handle this
    changeHandler= event=>{
        this.setState({[event.target.name]: event.target.value})
    }

    // handles the submit an event by passing props up to app, 
    // and passing props up to the authenticate component
    submitHandler = (event) =>{
        event.preventDefault();
        this.props.login(this.state.username,this.state.password)
        this.props.toggleLogin();
    }

    render() { 
        return ( 
            <LoginContainer>
                <InstagramLogo src={logo} alt=""/>
                <StyledForm action="" onSubmit={this.submitHandler}>
                    <StyledInput type="text" 
                        name="username" 
                        placeholder="Phone number, username, or email"
                        value={this.state.username}
                        onChange={this.changeHandler} 
                    />
                    <StyledInput type="password" 
                        name="password" 
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.changeHandler} 
                    />
                    <SubmitButton type="submit">Log In</SubmitButton>
                </StyledForm>
            </LoginContainer>
        );
    }
}
 
export default Login;