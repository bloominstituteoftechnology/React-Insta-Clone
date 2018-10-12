import React, { Component } from 'react';
import Button from '@atlaskit/button';
import FieldText from '@atlaskit/field-text';
import Form, {
    Field,
    FieldGroup,
    FormHeader,
    FormFooter,
  } from '@atlaskit/form';

import './login.css';
import styled from 'styled-components';

const Container = styled.div`
    align-items: center;
    margin: 0 auto;
    max-width: 250px;
    width: 100%;
`;

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
        }
    }

    submitHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    login = () => {
        const user = this.state.username;
        localStorage.setItem('user', user) // https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
        window.location.reload();
        // this.props.login()
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.login}>
                    <FormHeader
                        title="Instagram"
                        description="Please Login 😄"
                    />
                    <FieldGroup label="Login Details">
                        <Field label="Username" onChange={this.submitHandler} required>
                            <FieldText name="username" placeholder=" 🤡" />
                        </Field>
                        <Field label="Password" helperText="No password required 🤦🏼‍♂️" onChange={this.submitHandler}>
                            <FieldText name="password" placeholder=" 🔑" />
                        </Field>
                    </FieldGroup>
                    <FormFooter
                        actionsContent={[
                            {
                                id: 'submit-button',
                            },
                            {},
                        ]}
                    >
                        <Button type="submit" appearance="primary">Login</Button>
                    </FormFooter>
                </Form>
            </Container>
        )
    }
}

export default Login;