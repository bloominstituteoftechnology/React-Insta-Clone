import React from 'react';
import Login from '../Login/Login';

const Authenticate = (Component) => 
    class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                loggedIn: false,
            };
        }
        componentDidMount(){
            if (localStorage.getItem('username'))
                this.setState({ loggedIn: true, user: JSON.parse(localStorage.getItem('user')) });
        }
        render(){
            return this.state.loggedIn ? <Component /> : <Login />
        }
    }

export default Authenticate;