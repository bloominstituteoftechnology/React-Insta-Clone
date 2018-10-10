import React from 'react';
import Login from '../Login/Login';

const Authenticate = (App) =>
	class extends React.Component {
		constructor() {
			super();
			this.state = {
				loggedIn: false,
				username: '',
				password: ''
			};
		}

		// componentWillMount() {
		// 	this.setState({});
		// }

		recordAuth = (event) => {
			const userName = localStorage.setItem('username', username.value);
			const userPW = localStorage.setItem('password', password.value);
			this.setState({ [this.state.username]: userName }, ([ this.state.password ]: userPW));
		};

		changeHandler = (event) => {
			this.setState({ [event.target.name]: event.target.value });
		};
		componentDidMount() {
			const user = localStorage.getItem('username');
			if (user) {
				this.setState({ loggedIn: true });
			}
		}
		render() {
			if (this.state.loggedIn === true) {
				return <App />;
			} else {
				return <Login changeHandler={this.changeHandler} recordAuth={this.recordAuth} />;
			}
		}
	};

export default Authenticate;
