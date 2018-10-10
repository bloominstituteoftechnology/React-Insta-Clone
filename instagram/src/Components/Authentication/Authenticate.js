import React, { Component } from 'react'
import Login from '../Login/Login'

const Authenticate = App =>
	class extends Component {
		state = {
			loggedIn: false,
			username: ''
		}

		componentDidMount() {
			if (
				localStorage.getItem('username') &&
				localStorage.getItem('password')
			) {
				this.setState({
					loggedIn: true,
					username: localStorage.getItem('username')
				})
			} else {
				this.setState({
					loggedIn: false
				})
			}
		}
		render() {
			if (this.state.loggedIn === true) {
				return <App />
			} else if (this.state.loggedIn === false) {
				return <Login />
			}
		}
	}

export default Authenticate
