import React from 'react';
import './login.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class LogIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
    }


    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
      };


    logInHandler = event => {
        event.preventDefault();
        let username = this.state.username;
        localStorage.setItem('username', username);
        let password = this.state.password;
        localStorage.setItem('password', password);
        window.location.reload();
    };

    render() {
        return (
            <div>
      <Form>

        <FormGroup>
          <Label 
          for="username">Username
          </Label>

          <Input
          type="username"
          name="username"
          placeholder="Your Username" 
          value={this.state.username}
          onChange={this.changeHandler}
          />
        </FormGroup>

        <FormGroup>
          <Label 
          for="password">Password
          </Label>

          <Input
          type="password"
          name="password"
          placeholder="Your Password"
          value={this.state.password}
          onChange={this.changeHandler}
          />
        </FormGroup>

        <Button onClick={this.logInHandler}> Submit</Button>

      </Form>
            </div>

            )
        }
      }

export default LogIn;