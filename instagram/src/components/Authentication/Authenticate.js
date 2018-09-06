import React from 'react';
import Login from '../Login/Login';

const Authenticate = App => 
    class extends React.Component {  
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            };
        }

        componentDidMount() {
            if(!localStorage.getItem('username')) {
                this.setState({loggedIn: false})
            } else {
                this.setState({loggedIn: true})
            }
        }

        render() {
            console.log(this.state.loggedIn);
                if(this.state.loggedIn === true) {
                    return <App />;
                } else return <Login />;
        }
    };

export default Authenticate;