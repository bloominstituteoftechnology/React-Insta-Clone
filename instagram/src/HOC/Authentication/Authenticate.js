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

		submit = event => {
			event.preventDefault();
			localStorage.setItem('username', event.target.children[1].value);
			localStorage.setItem('password', event.target.children[2].value);
			window.location.reload();
		};

		componentDidMount() {
			this.setState({
				loggedIn: Boolean(localStorage.getItem('username'))
			});
		}

		render() {
			return (
				<div className="Authenticate">
					{localStorage.getItem('username') ? (
						<Component />
					) : (
						<Login submit={this.submit} />
					)}
				</div>
			);
		}
	};

export default Authenticate;
