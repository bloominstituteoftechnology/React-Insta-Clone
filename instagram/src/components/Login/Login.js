import React, { Component } from 'react';
import styled from 'styled-components';

const TomatoButton = styled.button`
color: palevioletred;
background: white;
border: 1px solid grey;
border-radius: 5px;
width: 50%;
margin: 10px auto;
height: 30px;
`;

const Form = styled.form`
display: flex;
flex-flow: column wrap;
width: 25%;
margin: auto;
`;

class Login extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    username: '',
	    password: ''
	};
    }

    handleInputChange = e => {
	this.setState({ [e.target.name]: e.target.value });
    };

    handleLoginSubmit = e => {
	const user = this.state.username;
	const pass = this.state.password;
	localStorage.setItem('user', user);
	localStorage.setItem('password', pass);
	window.location.reload();
    };

    render() {
	const disableButton = (!this.state.username || !this.state.password);
	return (
	    <Form>
              <input
		type="text"
		placeholder="User Name"
		name="username"
		value={this.state.username}
		onChange={this.handleInputChange}
		/>
              <input
		type="password"
		placeholder="Password"
		name="password"
		value={this.state.password}
		onChange={this.handleInputChange}
		/>
              <TomatoButton onClick={this.handleLoginSubmit} disabled={disableButton}>Submit</TomatoButton>
	    </Form>
	);
    }
}

export default Login;
