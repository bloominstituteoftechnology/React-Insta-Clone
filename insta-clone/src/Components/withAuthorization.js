import React from "react";

const withAuthorization = (LogInComponent, MainComponent) =>
	class AuthSwitcher extends React.Component {
		state = {
			loggedIn: false
		};

		handleLogin = username => {
			this.setState({ loggedIn: true }, () =>
				localStorage.setItem("insta-user", username)
			);
		};
		handleLogout = () => this.setState({ loggedIn: false });

		render() {
			if (this.state.loggedIn) {
				return <MainComponent onLogOut={this.handleLogout} />;
			} else {
				return <LogInComponent onLogIn={this.handleLogin} />;
			}
		}
	};

export default withAuthorization;
