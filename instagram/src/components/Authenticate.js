import React from 'react';
import Login from './Login';

const Authenticate = (Component) => 
    class extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                loggedIn: false,
            };
        }
        componentDidMount(){
            if (JSON.parse(localStorage.getItem('username')) !== null)
                this.setState({ loggedIn: true, user: JSON.parse(localStorage.getItem('username')) });
        }
        render(){
            return this.state.loggedIn ? <Component /> : <Login />
        }
    }

export default Authenticate;