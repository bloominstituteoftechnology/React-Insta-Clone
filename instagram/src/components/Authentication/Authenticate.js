import React, { Component } from 'react';
import Login from './../LoginPage/LoginPage';

const Authenticate = (Page) =>
	class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				usernameInput: '',
				passwordInput: '',
				loginSuccessful: false
			};
		}
		componentDidMount() {}
		handleChange = (event) => {
           
			this.setState({
				[event.target.name]: event.target.value
			});
		};

		authenticateLogin = (event) => {
			event.preventDefault();
			localStorage.setItem('username', this.state.usernameInput);
			localStorage.setItem('password', this.state.passwordInput);
			if (localStorage.getItem('username') === 'cotikor' && localStorage.getItem('password') === 'password1') {
				return this.setState({
					loginSuccessful: true
				});
			} else {
				return this.setState({
					loginSuccessful: false
				});
			}
		};

		render() {
            console.log('state', this.state.usernameInput)
			if (this.state.loginSuccessful === true) {
				return <Page />;
			} else {
				return (
					<Login
						usernameInput={this.state.usernameInput}
						passwordInput={this.state.passwordInput}
						authenticateLogin={this.authenticateLogin}
						handleChange={this.handleChange}
					/>
				);
			}
		}
	};

export default Authenticate;
