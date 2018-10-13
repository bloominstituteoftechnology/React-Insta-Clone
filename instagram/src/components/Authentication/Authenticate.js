import React from 'react';
import Login from '../Login/Login'

export default PassedComponent => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }
    componentDidMount() {
        this.setState(localStorage.getItem('username') ? {loggedIn: true} : {loggedIn: false})
    }
    render() {
        return this.state.loggedIn ? <PassedComponent /> : <Login />
    }
}