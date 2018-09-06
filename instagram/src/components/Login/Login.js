import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';


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
        const disableButton = !(this.state.username && this.state.password);
        
        return (
            <div>
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
        <Input
        type="text"
        name="password"
        value={this.state.password}
        placeholder="Enter password"
        onChange={this.handleInput}
        />
        <Button color="success" size="large" onClick={this.logIn} disabled={disableButton}>Login</Button>
        </FormGroup>
    </Form>
    </div>
        )
    }

}



export default Login;