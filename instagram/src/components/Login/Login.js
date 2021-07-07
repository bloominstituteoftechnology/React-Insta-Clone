import React, {Component} from 'react';
import styled from 'styled-components';
import logo from '../../assets/iglogo.png';

const LoginContainer = styled.form`
 background-color: #e0eeee;
 width: 400px;
 height: 500px;
 display: flex;
 flex-direction: column;
 margin: 8% auto;
 align-items: center;
 justify-content: center;
 border-radius: 4px;
 
`;

const Logs = styled.input`
 width: 70%;
 height: 40px;
 border-radius: 4px;
 border: 1px solid lightgray;
 margin: 4% 0;
 padding-left: 4%;
 &::-webkit-input-placeholder{
    text-align: center;
  }
`;

const LogoHeader = styled.img`
 width: 70%;
 height: auto;
`;

const LoginButton = styled.button`
 width: 70%;
 height: 40px;
 background-color: #f08080;
 color: #fffff0;
 border: none;
 border-radius: 4px;
 &:hover{
     background-color: #cd5555;
 }
`;


class Login extends Component {
    constructor(){
        super();
        this.state={
            loginInput: ''
        }
    }

    loggingIn = event => {
        event.preventDefault();
        if(this.state.loginInput){
          localStorage.setItem('username', this.state.loginInput);
         window.location.reload();
        }
        
      }

      
    
      handleLoginInput = event => {
        this.setState({
          loginInput: event.target.value
        });
      }

    render() {
        return (
            <LoginContainer>
                <LogoHeader src={logo} alt=''></LogoHeader>
                <Logs value={this.state.loginInput} onChange={this.handleLoginInput} placeholder='Enter Username'></Logs>
                <Logs type= 'text' placeholder='Enter Password'></Logs>
                <LoginButton onClick={this.loggingIn}>Login</LoginButton>
            </LoginContainer>
        );
    }
}


export default Login;