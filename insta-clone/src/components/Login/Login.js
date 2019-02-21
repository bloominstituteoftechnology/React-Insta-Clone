import React from 'react';
import { Button, Form, Input, Alert } from 'reactstrap';
import './Login.css';

const Login = (props) => {
    return(
        <div className="container login">
            <img src="https://3rockmarketing.com/wp-content/uploads/2016/09/instagram-logo.png" alt="instagram" className="instagram-text" />
            <Alert color="info">Please login! </Alert>
            <Form className="login" onSubmit={props.login}>
                <Input type="username" name="username" placeholder="Username" onChange={props.storeUser} required></Input>
                <Input type="password" name="password" placeholder="Password" required></Input>
                <Button>Login</Button>
            </Form>
        </div>
    )
}

export default Login;