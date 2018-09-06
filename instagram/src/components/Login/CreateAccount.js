import React, { Component } from 'react';
import styled from "styled-components";
import './Login.css';

const Form = styled.form`
    margin: 5%;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 100%;
    height: 57px;
    border: 1px solid #e2e2e2;
    padding-left: 2%;
    background-color: #ffffff;
    margin: 2% 0 0 2%;
`;


class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userValue: '',
            passValue: '',
            passConfirmValue: '',
            rejected: false,
            createText: 'Passwords do not match'
        };
      }

    createAccount = (e) => {
        if (this.state.passConfirmValue === this.state.passValue) {
            this.setState({rejected: false})
        } else {
            this.setState({rejected: true, createText: 'Passwords do not match'});
            return;
        }

        if (this.state.userValue === '') {this.setState({createText: 'Username is invalid', rejected2: true});return;}
        this.setState({rejected: false})
        
        localStorage.setItem(this.state.userValue, this.state.passValue);
        this.props.updateCreate(e)
    }

    // Update username value for Create Account
    updateCreateInputValue(e) {
        this.setState({
            userValue: e.target.value
        });
    }

    // Update password value for Create Account
    updateCreatePassValue(e) {
        this.setState({
            passValue: e.target.value
        });
    }

    updateCreatePassValue2(e) {
        this.setState({
            passConfirmValue: e.target.value
        });

        if (e.target.value === this.state.passValue) {
            this.setState({rejected: false});
            return;
        } else {
            this.setState({rejected: true, createText: 'Passwords do not match'});
        }

    }

    render() {
        return (
            <div className="login">
                <img src={require("./img/InstagramLogo.png")} alt="Instagram Logo" />
                <Form onSubmit={this.createAccount}>
                    <label className="login-title">Create Account</label><br /><br />
                    <Input type="input" value={this.state.userValue} onChange={e => this.updateCreateInputValue(e)} placeholder="Username" />
                    <Input type="password" value={this.state.passValue} onChange={e => this.updateCreatePassValue(e)} placeholder="Password" />
                    <Input type="password" value={this.state.passConfirmValue} onChange={e => this.updateCreatePassValue2(e)} placeholder="Confirm Password" />
                    <label className={this.state.rejected ? 'login-reject' : 'login-rejected hidden'}>{this.state.createText}</label>
                    <div className="create-buttons">
                        <Input type="button" onClick={e => this.createAccount(e)} value="Register" />
                        <Input type="button" onClick={e => this.props.updateCreate(e)} value="Cancel" />
                    </div>
                </Form>
            </div>
        );
    }
}

export default CreateAccount;