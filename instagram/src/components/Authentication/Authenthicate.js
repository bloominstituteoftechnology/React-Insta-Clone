import React from 'react';
import Login from '../Login/Login';

const Authenticate = (App) =>
	class extends React.Component {
		constructor() {
			super();
			this.state = {
				loggedIn: false
			};
		}
		componentDidMount() {
			const username = localStorage.getItem('username');
			const password = localStorage.getItem('password');
			if (username && password) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		}
		render() {
			if (this.state.loggedIn) {
				return <App />;
			} else {
				return <Login />;
			}
		}
	};

export default Authenticate;
