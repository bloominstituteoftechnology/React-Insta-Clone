import React from 'react';
import { Container, Row, Button, Form, FormGroup, Input} from 'reactstrap';
import styled from 'styled-components';
import logo from '../SearchBar/instagram.png'
import appleStore from './apple-store.png'
import googleStore from './google-store.png'
import msStore from './ms-store.png'

const LoginContainer = styled(Container)`
  padding-top:15px;
`

const LoginLogo = styled.img`
  padding-left: 8px;
`

const LoginRow = styled(Row)`
  display:flex;
  justify-content:center;
`

const FormContainer = styled.div`
  padding: 5%;
  padding-top: 2.5%;
  border: 1px solid lightgray;
  background-color: white;
`

const StyledInput = styled(Input)`
  &::-webkit-input-placeholder{
    font-size:12px;
  }
`
const StyledButton = styled(Button)`
  width:100%;
`

const GetAppDiv = styled.div`
  padding: 20px 0;
`

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      data : [{username:''},{password:''}]
    }
  }

  onUsernameChange =(e) =>{
    let localState = this.state.data.slice();
    localState[0].username = e.target.value;
    this.setState({data:localState})
  }

  onPasswordChange =(e) =>{
    let localState = this.state.data.slice();
    localState[1].password = e.target.value;
    this.setState({data:localState})
  }

  onLoginHandler = (e) => {
    localStorage.setItem('instaclone',JSON.stringify(this.state.data))
    window.location.reload();
  }

  render() { 
    return (
      <LoginContainer fluid>
        <LoginRow>
          <FormContainer>
            <div>
              <LoginLogo className="gram-logo" src={logo} alt="logo"/>
            </div>
            <Form>
              <FormGroup>
                <StyledInput type="text" name="text" id="exampleText" placeholder="Please enter your username" onChange={this.onUsernameChange}/>
              </FormGroup>
              <FormGroup>
                <StyledInput type="password" name="password" id="examplePassword" placeholder="Please enter your password" onChange={this.onPasswordChange}/>
              </FormGroup>
              <StyledButton color="primary" onClick={this.onLoginHandler}>Login</StyledButton>
            </Form>
          </FormContainer>
        </LoginRow>
        <LoginRow>
          <GetAppDiv>Get the App</GetAppDiv>
        </LoginRow>
        <LoginRow>
          <div className="store">    
            <a href="https://itunes.apple.com/us/app/instagram/id389801252" target="_blank" rel="noopener noreferrer"><img src={appleStore} alt="apple-store"/></a>
            <a href="https://play.google.com/store/apps/details?id=com.instagram.android" target="_blank" rel="noopener noreferrer"><img src={googleStore} alt="google-store"/></a>
            <a href="https://www.microsoft.com/en-us/p/instagram/9nblggh5l9xt" target="_blank" rel="noopener noreferrer"><img src={msStore} alt="microsoft-store"/></a>
          </div>
        </LoginRow>
      </LoginContainer>
     )
  }
}
 
export default Login;