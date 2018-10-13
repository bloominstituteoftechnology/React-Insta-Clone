import React, {Component} from 'react';
import Login from '../Login/Login';

const Authenticate = PassedComp => {
    return class WrappedComp extends Component {
        constructor(props){
            super(props);
            this.state = {
                loggedIn: false
            };
        }

        componentDidMount() {
            console.log("login stuff:", localStorage.getItem('username') );
            if( !localStorage.getItem('username') ) {
                this.setState({ loggedIn: false });
            } else {
                this.setState({ 
                    loggedIn: true, 
                    userName: localStorage.getItem('username')
                });
            }
        }
        render() {
            if (this.state.loggedIn) 
                return( <PassedComp /> )
            return <Login />
        }
    };
};

export default Authenticate;