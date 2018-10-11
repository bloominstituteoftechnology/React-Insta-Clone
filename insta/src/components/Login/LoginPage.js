import React from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: ''
        };
    }
    handleInputChange =e =>{
     this.setState({ [e.target.name]: e.target.value })
    }
    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }
    render(){
    return(
        <div>
            <div className="login-header-img">
               <img src="http://allvectorlogo.com/img/2017/10/instagram-logo.png" className="login-logo" alt="insta Logo" />
               <h1>Login to see photos and videos <br /> from your friends</h1>
            </div>
            <div>
            <Form inline>
                <FormGroup>
                  <Input type="text" name="username" id="Username" placeholder="Username" value={this.state.username} onChange={this.handleInputChange}/>
                </FormGroup>
                {' '}
                <FormGroup>
                    <Input type="password" name="password" id="Password" placeholder="Password" />
                </FormGroup>
                {' '}
                <Button onClick={this.handleLoginSubmit}  >Login</Button>
                </Form>
            </div>
            <div>
                <p>Don't have an account sign-up <span><a href="#">here</a></span></p>
            </div>
            </div>
    )}
}
export default Login;