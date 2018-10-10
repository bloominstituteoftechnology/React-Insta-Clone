import React from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const Login = props =>{
    return(
        <div>
            <div className="login-header-img">
               <img src="http://allvectorlogo.com/img/2017/10/instagram-logo.png" className="login-logo" alt="insta Logo" />
               <h1>Login to see photos and videos <br /> from your friends</h1>
            </div>
            <div>
            <Form inline>
                <FormGroup>
                  <Label for="exampleEmail" hidden>Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label for="examplePassword" hidden>Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                </FormGroup>
                {' '}
                <Button onClick={props.click} >Login</Button>
                </Form>
            </div>
            <div>
                <p>Don't have an account sign-up <span><a href="#">here</a></span></p>
            </div>
            </div>
    )
}
export default Login;