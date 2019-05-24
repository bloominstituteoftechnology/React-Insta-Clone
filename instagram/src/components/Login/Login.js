import React from 'react';
import {LoginInput,LoginHeader,Spacer20,Spacer10,LoginButton} from '../Styled/Styled'
import Styled from 'styled-components';

const WrapperDiv = Styled.div`
    line-height:2rem;
    height:400px;
    width:400px;
    background-color:white;
    border-radius:3px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
`
const FlexDiv = Styled.div`
    display:flex;
    justify-content:space-between;
`
const LogoImage = Styled.img`
    height:50px;
    width:50px;
`
const LoginMessage = Styled.p`
    color: red;
    font-size:1.6rem;
`

class Login extends React.Component {
    constructor(props){ 
        super(props)
        this.loginMessage = ''
    
    }

    componentDidMount(){
        document.addEventListener("keydown",event=>{
            if(event.key==='Enter')
            {
                this.props.login()
            }
        })
    }
    render(){
        if(!this.props.loginStatus)
        {
            this.loginMessage = 'Both The Username And Password Are Required.'
        } else 
        {
            this.loginMessage =''
        }
        return( 
            <WrapperDiv>
                    <LogoImage src={require('../../static/img/Instagram.png')}></LogoImage>
                    <Spacer20></Spacer20>
                    <Spacer20></Spacer20>
                    <LoginHeader>UserName</LoginHeader><LoginInput id='txtUserName' placeholder='Username' value={this.props.txtUserName} onChange={this.props.userNameChange}></LoginInput>
                    <Spacer10></Spacer10>
                    <LoginHeader>Password</LoginHeader><LoginInput type='password' id='txtPassword' placeholder='Password' value={this.props.txtPassword} onChange={this.props.passwordChange}></LoginInput>
                    <Spacer20></Spacer20>
                    <LoginMessage>{this.loginMessage}</LoginMessage>
                    <Spacer20></Spacer20>
                    <FlexDiv>
                        <LoginButton onClick={this.props.login}>Log In</LoginButton>
                    </FlexDiv>
            </WrapperDiv>
        )
    
    }
}




export default Login

