import React from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:95%

`
const LoginHeader = styled.div`
    margin:0 auto;
    >h1{
        text-align:center;
        font-size:1.8rem;
        margin-bottom: 80px;
    }
` 
const LoginImg = styled.img`
    width: 70%;
    height: 150px;
    margin-left:10%;
`

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: ''
        };
    }
    handleInputChange =e =>{
     this.setState({ [e.target.name]: e.target.value })
    }
    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }
    render(){
    return(
        <LoginContainer>
            <LoginHeader >
               <LoginImg src="http://allvectorlogo.com/img/2017/10/instagram-logo.png"  alt="insta Logo" />
               <h1>Login to see photos and videos <br /> from your friends</h1>
            </LoginHeader>
            <div >
            <Form >
                <FormGroup>
                  <Input type="text" name="username" id="Username" placeholder="Username" value={this.state.username} onChange={this.handleInputChange}/>
                </FormGroup>
                {' '}
                <FormGroup>
                    <Input type="password" name="password" id="Password" placeholder="Password" />
                </FormGroup>
                {' '}
                <Button onClick={this.handleLoginSubmit}  >Login</Button>
                </Form>
            </div>
            <div>
                <p>Don't have an account sign-up <span><a href="#">here</a></span></p>
            </div>
            </LoginContainer>
    )}
}
export default Login;