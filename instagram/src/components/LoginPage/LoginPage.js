import React, { Component } from 'react';
import styled from 'styled-components';

const MainDivStyle = styled.div`
	width: 100%;
	height: auto;
	margin: 0;
	padding: 10%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;
const Heading1Style = styled.h1`
	font-size: 3rem;
	font-weight: bold;
	font-style: italic;
`;
const FormStyle = styled.form`
	border: 5px black solid;
	background: #e0ffff;
	width: 400px;
	height: auto;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	margin: 0;
	padding: 2.5%;
	border-radius: 10px;
`;
const InputStyle = styled.input`
	margin: 2.5%;
	padding: 2.5%;
	width: 50%;
	height: auto;
	text-align: center;
	border-radius: 10px;
`;

const ButtonStyle = styled.button`
	border-radius: 10px;
	background: black;
	color: white;
	border: 2px solid white;
	margin: 2.5%;
	padding: 2.5%;
	width: 50%;
	height: auto;
`;

class Login extends Component {
	render() {
		return (
			<MainDivStyle>
				<FormStyle onSubmit={this.props.authenticateLogin}>
					<Heading1Style>Please Log In...</Heading1Style>
					<InputStyle
						type="text"
						name="usernameInput"
						placeholder="username"
						value={this.props.usernameInput}
						onChange={this.props.handleChange}
					/>

					<InputStyle
						type="text"
						name="passwordInput"
						placeholder="password"
						value={this.props.passwordInput}
						onChange={this.props.handleChange}
					/>
					<ButtonStyle onSubmit={this.props.authenticateLogin}>
						Login
					</ButtonStyle>
				</FormStyle>
			</MainDivStyle>
		);
	}
}
export default Login;
