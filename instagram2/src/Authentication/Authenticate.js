import React from 'react';
import App from '../App';
import Login from '../components/Login/Login';


class Authenticate extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: ""
            };
        }
        componentDidMount() {
            console.log('authenticate props', this.props);
            // if (localStorage.getItem("username")) {
                
            // }
        }
        render() {
            if (this.state.loggedIn === true) {
                return (<App />)
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