import React from 'react';
import './login.css';
import { Button } from 'reactstrap';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username: '',password: ''};
                        }
     handleLoginSubmit = e => {
         e.preventDefault();
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
                                };
    handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
                                };
    render() {
    return (
      <form className="form">
        <h3>Greetings, welcome to InstaClone! </h3>
        <p>an instagram clone, I made while learning react</p>
        <div>Login</div>
         <input type="text" placeholder="Enter User Name..." name="username"
            value={this.state.username} onChange={this.handleInputChange}
                                                                            />
            <br />
          <input
            type="password" placeholder="Enter Password..." name="password"
            value={this.state.password} onChange={this.handleInputChange}
                                                                                />
          <br />
          <Button color="primary" onClick={this.handleLoginSubmit}>Log In</Button>
         </form>
                    );}
                            };
export default Login;