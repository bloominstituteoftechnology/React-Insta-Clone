import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
// import './Login.css';
import styled, {css} from 'styled-components';

const FormWrapper = styled.div`
width: 500px;
background: gray;
border-radius: 6px;
margin: 10px auto;
padding: 10px 25px;
`;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    logIn = e => {
        //set localStorage
        const username = this.state.username;
        localStorage.setItem('user', username);
        window.location.reload();
    };

    
    render() {
     //   const disableButton = !(this.state.username && this.state.password);
        
        return (
            <div>
    <FormWrapper>
    <Form className="login">
    <h3>Welcome to React Insta Clone</h3>
    <div>Please Login</div>
    <FormGroup>
        <Input 
        type="text"
        name="username"
        value={this.state.username}
        placeholder="Enter username"
        onChange={this.handleInput}
        />
        </FormGroup>
        <FormGroup>
        <Input
        type="text"
        name="password"
        value={this.state.password}
        placeholder="Enter password"
        onChange={this.handleInput}
        />
        <Button color="primary" size="large" onClick={this.logIn} block>Login</Button>
        </FormGroup>
    </Form>
    </FormWrapper>
    </div>
        )
    }

}



export default Login;