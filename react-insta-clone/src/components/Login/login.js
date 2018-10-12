import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'pascale',
      password: ''
    };
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <Form inline>
       <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
         <Label for="exampleEmail" className="mr-sm-2">Email</Label>
         <Input type="email" name="username" id="exampleEmail" placeholder="email" value={this.state.username} onChange={this.handleInputChange} />
       </FormGroup>
       <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
         <Label for="examplePassword" className="mr-sm-2">Password</Label>
         <Input type="password" name="password" id="examplePassword" placeholder="don't tell!"  value={this.state.password} onChange={this.handleInputChange}/>
       </FormGroup>
       <Button color="success" onClick={this.handleLoginSubmit}>Submit</Button>
     </Form>
   );
  }

};

export default Login;
