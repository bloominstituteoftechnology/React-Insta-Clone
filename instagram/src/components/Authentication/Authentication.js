import React from 'react';
import Login from '../Login/Login';

const Authentication = WrappedComponent => 
    class Auth extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                IsLoggedIn: this.props.IsLoggedIn
            }
        }
        render(){
            if(!this.state.IsLoggedIn){
                return <WrappedComponent />
            } else 
            {
                return <Login />
            }
            
        }
    }

export default Authentication