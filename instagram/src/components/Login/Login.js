import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Login extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          {/* <Label for="exampleEmail" className="mr-sm-2">
            Email
          </Label> */}
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          {/* <Label for="examplePassword" className="mr-sm-2">
            Password
          </Label> */}
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
          />
        </FormGroup>
        <Button>Login</Button>
      </Form>
    );
  }
}
