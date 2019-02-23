import React from 'react';
import avatar from '../../assets/avatar.png';
import { LoginButton, LoginInput, LoginContainer, LoginAuth, LoginParagraph } from './LoginStyles';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	recordAuth = (event) => {
		const user = this.state.username;
		const pw = this.state.password;
		localStorage.setItem('username', JSON.stringify(user));
		localStorage.setItem('password', JSON.stringify(pw));
		window.location.reload();
	};

	render() {
		return (
			<LoginContainer>
				<div className="welcomeHeader">
					<img src={avatar} alt="instagram avatar" />
				</div>
				<LoginAuth>
					<LoginParagraph>Enter your username:</LoginParagraph>
					<LoginInput
						userName
						type="text"
						placeholder="username"
						name="username"
						onChange={this.changeHandler}
						value={this.state.username}
					/>
					<LoginParagraph>Enter your password:</LoginParagraph>
					<LoginInput
						password
						placeholder="password"
						name="password"
						onChange={this.changeHandler}
						value={this.state.password}
						type="password"
					/>
					<LoginButton onClick={this.recordAuth}>login</LoginButton>
				</LoginAuth>
				<div className="signUpToday">
					Sign up today for <span className="free">free</span>!!
				</div>
			</LoginContainer>
		);
	}
}

export default Login;
