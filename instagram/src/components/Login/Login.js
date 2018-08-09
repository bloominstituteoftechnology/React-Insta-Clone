import React from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';


class Login extends React.Component {
    constructor() {
    super();    
        this.state = {
            username: "",
            password: ""
        }   
    }

    handleInput = event => {
        this.setState({[event.target.name]: event.target.value})
    }    
    
    

    handleLogin = event => {
        const user = this.state.username;
        localStorage.setItem("user", user );
        window.location.reload();
    };


    render() {
        return (
            <Form className="form">
                <h4>Instagram Login</h4>
                <div className="login-text">Please enter Username and Password</div>
                <FormGroup>
                    <Input
                        type="text"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.handleInput}
                        name="username"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleInput}
                        name="password"
                    />
                    <Button color="success" size="large" 
                    onClick={this.handleLogin}>Log In
                    </Button>
                </FormGroup>
            </Form>
        )
    }

}

export default Login;