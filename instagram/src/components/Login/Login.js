import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      data : [{email:''},{password:''}]
    }
  }

  onEmailChange =(e) =>{
    let localState = this.state.data.slice();
    localState[0].email = e.target.value;
    this.setState({data:localState})
  }

  onPasswordChange =(e) =>{
    let localState = this.state.data.slice();
    localState[1].password = e.target.value;
    this.setState({data:localState})
  }

  onLoginHandler = (e) => {
    localStorage.setItem(this.state.data[0].email,this.state.data[1].password)
    window.location.reload();
  }

  render() { 
    return (
      <Container className="login-container">
        <Row className="d-flex justify-content-center login-row">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input className="email" type="email" name="email" id="exampleEmail" placeholder="Please Enter email" onChange={this.onEmailChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input className="password" type="password" name="password" id="examplePassword" placeholder="Please enter password" onChange={this.onPasswordChange}/>
            </FormGroup>
            <Button onClick={this.onLoginHandler}>Login</Button>
          </Form>
        </Row>
      </Container>
     )
  }
}
 
export default Login;