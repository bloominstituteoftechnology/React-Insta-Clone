import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Login = () => {
  return (
    <div>
      <h1>You must login first to view content</h1>
      <Form inline>
        <FormGroup>
          <Label for="username" hidden>
            Username
          </Label>
          <Input
            type="username"
            name="username"
            id="exampleUsername"
            placeholder="Username"
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="examplePassword" hidden>
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
          />
        </FormGroup>{" "}
        <Button color="info">Submit</Button>
      </Form>
    </div>
  );
};

export default Login;
