import React, { Component } from 'react';
import { Form, FormGroup, Col, Button, FormControl } from 'react-bootstrap';
import './Login.css';

class LoginForm extends React.Component  {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
  
        };
    }
 
 handleUsernameChange = event => {
    this.setState({
        username: event.target.value,
    });
  };

  handlePasswordChange = event => {
    this.setState({
        password: event.target.value,
    });
  };

  storeUsersInput = () => {
    localStorage.setItem('username', JSON.stringify(this.state.username));
  }


 render(){
    return (
        <div className="form-wrapper" >
            <h2>Instagram</h2>
            <div className="login-form">
                <Form horizontal onSubmit={this.storeUsersInput}>
                    <FormGroup controlId="formHorizontalUsername">
                        <Col sm={12}>
                            <FormControl className="login-input" type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col sm={12}>
                            <FormControl className="login-input" type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={0} sm={12}>
                        <Button className="btn-login" type="submit">Log in</Button>
                        </Col>
                    </FormGroup>

                </Form>
            </div>
        
        </div>

      );
 }


};


export default LoginForm;