import React from 'react';
import Login from '../../components/Login/Login';

const Authenticate = Component =>
	class extends React.Component {
		constructor() {
			super();
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
			return (
				<div className="Authenticate">
					{this.state.loggedIn ? <Component /> : <Login />}
				</div>
			);
		}
	};

export default Authenticate;
