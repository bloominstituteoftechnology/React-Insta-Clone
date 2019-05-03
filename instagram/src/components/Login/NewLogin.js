import React, { Component } from 'react'
import Div from '../styles/div'
import { LoginForm, Input, H1 } from '../styles/input'
import { Button } from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";

export default class NewLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            users: this.props.location.state.users
        }
    }

    newUser = e => {
        e.preventDefault();
        const newUser = {
            id: Date.now(),
            username: this.state.username,
            password: this.state.password
        }

        localStorage.setItem('users', JSON.stringify([...this.state.users, newUser]));

        this.props.history.goBack();

    }

    componentWillUnmount() {
        window.location.reload();
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        console.log(this.props)
        return (
            <Div fade>
                <Div login>
                    <H1>New User:</H1>
                    <LoginForm onSubmit={this.newUser}>
                        <Input
                            placeholder='Username'
                            name='username'
                            value={this.state.username}
                            onChange={this.handleChanges}
                        />
                        <Input
                            placeholder='Password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChanges}
                            type='password'
                        />
                        <Button color='primary' size='lg'>Submit</Button>
                    </LoginForm>
                    <Button
                        outline
                        color='secondary'
                        onClick={() => this.props.history.goBack()}
                        style={{ marginTop: 15, width: 100 }}
                    >Back</Button>
                </Div>
            </Div>
        )
    }
}
