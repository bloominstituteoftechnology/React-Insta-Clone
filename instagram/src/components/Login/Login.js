import React from 'react';
import './Login.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div className='login-form-container'>
                <Form className='login-form'>
                    <FormGroup className='instagram-word-container'>
                        <img className='login-instagram-word' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt='' />
                    </FormGroup>
                    <FormGroup>
                        <Input type="username" name="username" id='username' placeholder="Username" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                    </FormGroup>
                    <Button>Log In</Button>
                </Form>
            </div>
        );
    }
}

export default Login;