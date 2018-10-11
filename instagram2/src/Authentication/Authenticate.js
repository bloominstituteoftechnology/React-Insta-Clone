import React from 'react';
import App from '../App';
import Login from '../components/Login/Login';

const Authenticate = PassedComponent => class extends React.Component {
// class Authenticate extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            };
        }
        componentDidMount() {
            console.log('authenticate props', this.props);
            if (!localStorage.getItem("username")) {
                this.setState({ loggedIn: false});
            } else {
                this.setState({ loggedIn: true});
            }
        }
        render() {
            if (this.state.loggedIn === true) {
                return (<PassedComponent />)
                } else {
                return (<Login />)
                };
        }
    }
export default Authenticate;


//loggedIn === true ???
//CDM: if logged in then..., else....
//CDM is checking the status of logged in or not?  somehow using localStorage? 
//while render is only allowing access if logged in.