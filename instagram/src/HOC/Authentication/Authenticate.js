import React from 'react';
import Login from '../../components/Login/Login';

export const Authenticate = Component =>
	class extends React.Component //No collision {
		constructor(props) {
			super(props);
			this.state = {
				loggedIn: false
			};
		}

		componentDidMount() {
			this.setState({
				loggedIn: Boolean(localStorage.getItem('username'))
			});
		}

		render() {
			return this.state.loggedIn ? <Component /> : <Login />;
		}
	};

export default Authenticate; //Try not to break your pattern here. Come back.
