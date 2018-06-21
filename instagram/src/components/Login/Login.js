import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css'
import logo from '../SearchBar/instagram.png'
import appleStore from './apple-store.png'
import googleStore from './google-store.png'
import msStore from './ms-store.png'

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
      <Container className="container-fluid login-container">
        <Row className="d-flex justify-content-center login-row">
          <div className="form-container">
            <div className="logo-container">
              <img className="gram-logo login" src={logo} alt="logo"/>
            </div>
            <Form>
              <FormGroup>
                <Input className="text" type="text" name="text" id="exampleText" placeholder="Please enter your username" onChange={this.onUsernameChange}/>
              </FormGroup>
              <FormGroup>
                <Input className="password" type="password" name="password" id="examplePassword" placeholder="Please enter your password" onChange={this.onPasswordChange}/>
              </FormGroup>
              <Button onClick={this.onLoginHandler} color="primary">Login</Button>
            </Form>
          </div>
        </Row>
        <Row className="d-flex justify-content-center">
          <div className="get-app">Get the App</div>
        </Row>
        <Row className="d-flex justify-content-center">
          <div className="store">    
            <a href="https://itunes.apple.com/us/app/instagram/id389801252" target="_blank"><img src={appleStore} alt="apple-store"/></a>
            <a href="https://play.google.com/store/apps/details?id=com.instagram.android" target="_blank"><img src={googleStore} alt="google-store"/></a>
            <a href="https://www.microsoft.com/en-us/p/instagram/9nblggh5l9xt" target="_blank"><img src={msStore} alt="microsoft-store"/></a>
          </div>
        </Row>
      </Container>
     )
  }
}
 
export default Login;