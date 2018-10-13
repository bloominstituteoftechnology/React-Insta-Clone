import React from 'react'
import {Button, Form, Input, FormGroup} from 'reactstrap';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        } 
    }

    userChangeHandler = event => {
        this.setState({
            username: event.target.value,
        })
    }

    submitHandler = event => {
        event.preventDefault();
        const user = this.state.username;
        localStorage.setItem('username', user);
        window.location.reload();
    }

    render(){
        return(
            <Form>
                <FormGroup>
                    <Input type="text" placeholder="username" onChange={this.userChangeHandler} value={this.state.username}></Input>
                </FormGroup>
                <FormGroup>
                    <Input type="password"placeholder="password" ></Input>
                </FormGroup>
                <Button onClick={this.submitHandler}>Login</Button>
            </Form>
        )
    }
}


export default Login;