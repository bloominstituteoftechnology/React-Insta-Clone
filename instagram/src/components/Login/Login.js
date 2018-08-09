import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
         }
    }
    render() { 
        return ( 
            <div>
                <Form inline>
        <FormGroup>
          <Label for="exampleUsername" hidden>Email</Label>
          <Input type="username" name="username" id="exampleUsername" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" hidden>Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
            </div>
         );
    }
};