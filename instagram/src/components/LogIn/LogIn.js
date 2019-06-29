import React from 'react';
import './login.css'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './login-phones.png';


class LogIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: props.username,
        password: props.password
      };
    }


    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      };


    logInHandler = event => {
        event.preventDefault();
        let username = this.state.username;
        window.localStorage.setItem('username', username);
        let password = this.state.password;
        window.localStorage.setItem('password', password);
        window.location.reload();
    }
    render() {
        return (
            <div>
        <div className='login-content'>

        <div className='column-one'>

        <div className='phone-pic' />
        </div>

        <div className='column-two'>

<div className='login-form'>
        <div className='login-logo'/>
        <h2 className='login-text'>Sign up to see photos and videos from your friends.</h2>
      <Form onSubmit={this.logInHandler} className='form-box'>

        <FormGroup>
        <Button className='login-button'> Log in with Facebook</Button>

          <Input
          type="username"
          name="username"
          placeholder="username (username)" 
          value={this.state.username}
          onChange={this.changeHandler}
          />
        </FormGroup>

        <FormGroup>

          <Input
          type="password"
          name="password"
          placeholder="password (password)"
          value={this.state.password}
          onChange={this.changeHandler}
          />
        </FormGroup>

        <Button className='login-button' onClick={this.logInHandler}> Submit</Button>
      </Form>
      </div>
      <div className='login-download' />
      </div>

      </div>
    </div>

            )
        }
      }

export default LogIn;