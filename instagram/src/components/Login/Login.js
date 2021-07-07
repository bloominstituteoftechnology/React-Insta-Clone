import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css';
import InstaLogo from './Instawhat.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
     <div>
      <div className="login-form-container">
	      <div className="login-title-row">
	       <i className="fab fa-instagram ig-logo-icon"></i>
	      <h3 className="login-header"><img src={InstaLogo} alt="Ig Word Logo" /></h3>   
	      </div>
	      <div>
      			<h1 className="login-desc">Welcome to Instawhat.  Login to check out all the...'Whhaaattss'</h1>
   	 			</div>
	      </div>
	      <div>
		      <Form className="login-form">      
		        <div className="input-wrapper">
		        	<div className="login-txt">Login</div>     
				        <FormGroup>
				          <Input
				            type="text"
				            placeholder="User Name"
				            name="username"
				            value={this.state.username}
				            onChange={this.handleInputChange}
				          />
				        </FormGroup>
				        <FormGroup>
				          <Input
				            type="password"
				            placeholder="Password"
				            name="password"
				            value={this.state.password}
				            onChange={this.handleInputChange}
				          />
				          <br />
				          <Button color="secondary" size="large" onClick={this.handleLoginSubmit}>
				            Log In
				          </Button>
				        </FormGroup>			
		        </div>
		      </Form>
		           
      </div>
			 	
</div>
    );
  }
}

export default Login;