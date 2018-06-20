import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <Container>
        <Row className="d-flex justify-content-center">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Please Enter email" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Please enter password" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Row>
      </Container>
     )
  }
}
 
export default Login;