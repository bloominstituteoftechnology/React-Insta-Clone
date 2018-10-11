import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
    render() {
    return (
        <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Username</Label>
          <Input type="text" name="username" id="Username" placeholder="username" required />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="Password" placeholder="..." required />
        </FormGroup>
        <Button type="submit" value="Login" >Submit</Button>
      </Form>
    )
    }
}

export default Login;