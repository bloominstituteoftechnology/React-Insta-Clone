import React, { Component } from 'react';

import logo from '../../imgs/instagram_logo.svg'
import {Button, Input} from '../../Styles/Reusables'

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
                    <Input type="text" 
                        name="username" 
                        placeholder="Phone number, username, or email"
                        value={this.state.username}
                        onChange={this.changeHandler} 
                    />
                    <Input type="password" 
                        name="password" 
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.changeHandler} 
                    />
                    <Button primary type="submit">Log In</Button>
                </StyledForm>
            </LoginContainer>
        );
    }
}
 
export default Login;