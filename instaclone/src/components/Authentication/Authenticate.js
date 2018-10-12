import React from 'react';
import Login from '../Login/Login';

const Authenticate = App => {
	return class extends React.Component {
		constructor() {
			super();
			this.state = {
				loggedIn: false
			};
		}
		componentDidMount() {
			if(localStorage.getItem('username')){
        this.setState({loggedIn:true})
      }
		}

		render() {
			return this.state.loggedIn === false ? <Login /> : <App loginState={this.state.loggedIn} />;
		}
	};
};

export default Authenticate;
