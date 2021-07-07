import React from 'react';
import styled from 'styled-components';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",              
        }
    }

    handleInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
  
      loginSumbit = e => {
        e.preventDefault();
        window.localStorage.setItem('username', this.state.username)
        window.localStorage.setItem('password', this.state.password)
        console.log('reload');
        window.location.reload()
      }

    render(){        
        return (
        <LoginPage>
           <Phone src='https://i.imgur.com/11H41fc.png'/>          
            <LoginForm>                                    
                <LoginTitle src="https://i.imgur.com/XcbIDZq.png"/>
                <LoginInput 
                    placeholder='Username' 
                    value={this.state.username} 
                    name= 'username' 
                    onChange={this.handleInput}
                />

                <LoginInput  
                    placeholder='Password'
                    value={this.state.password}
                    name= 'password'
                    onChange={this.handleInput}
                />
                <LoginButton 
                onClick={this.loginSumbit} 
                type='button'>
                Sign Up
                </LoginButton>
                <LoginText>By signing up, you agree to our <Bold>Terms, Data Policy</Bold> and <Bold>Cookies Policy.</Bold></LoginText>
            </LoginForm> 
        </LoginPage>      
        
        )   
    } 
}
export default Login;

const LoginForm = styled.form `
    ${(props) => props.theme.color.backgroundColor}
    ${(props) => props.theme.container}
    text-align: center;    
    border: 1px solid #e6e6e6;
    border-radius: 1px;
    margin: 0 auto 10px;
    padding: 10px 0;
    width: 348px;
    height: 400px;
    
`
const LoginTitle = styled.img `
    ${(props) => props.theme.color.backgroundColor}
    margin: 22px auto 12px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    height: 60px;
    width: 220px;
`
const LoginPage = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto 0;
    max-width: 830px;
    padding-bottom: 44px;
    width: 100%;
    flex-grow: 1;
    flex-direction: row;
`
const Phone = styled.img `
    width: 440px;
    height: 527px;
   
    @media(max-width: 730px) {
        display:none;
    }
`
const LoginInput = styled.input `
    display:flex;
    font-size: 16px;
    flex: 1 0 0px;
    margin: 10px auto;
    outline: 0;
    overflow: hidden;
    padding: 9px 0 7px 8px;
    text-overflow: ellipsis;
    background: #fafafa;
    border:1px solid rgba(225,225,225,0.5);
    width: 250px;
`

const LoginButton = styled.button`
    border:0;
    border:1px;
    width: 250px;
    padding: 3px 0 ;
    background: rgb(56, 151, 240);
    color: #fff;    
`
const LoginText = styled.p `
    text-align: center;
    width: 220px;    
    background: none;
    margin: 10px auto;
    color: rgba(0,0,0,0.6);
    line-height: 20px;
`
const Bold = styled.span`
    font-weight: bold;
    background: none;
`
