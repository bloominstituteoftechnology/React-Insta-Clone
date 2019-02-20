import React from 'react';
import './login.css';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {username: '',password: ''};
                        }
     handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
                                };
    handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
                                };
    render() {
    return (
      <Form className="form">
        <h3>Greetings, welcome to InstaClone! </h3>
        <p>an instagram clone, I made while learning react</p>
        <div>Login</div>
         <Input type="text" placeholder="Enter User Name..." name="username"
            value={this.state.username} onChange={this.handleInputChange}
                                                                            />
            <br />
          <Input
            type="password" placeholder="Enter Password..." name="password"
            value={this.state.password} onChange={this.handleInputChange}
                                                                                />
          <br />
          <Button onClick={this.handleLoginSubmit}>Log In</Button>
         </Form>
                    );}
                            };
export default Login;