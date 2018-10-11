import React from 'react';
import Login from '../Login/Login'

const Authenticate = PassedComponent =>
    class App extends React.Component {
        constructor(){
            super();
            this.state={
                loggedIn:false,
            };
        }
        componentDidMount(){
            if(!localStorage.getItem('user')){
                this.setState({loggedIn : false});
            }else{
            this.setState({loggedIn : true});}
        }
        render() {
            //I just put the true here for clarity for myself
            if(this.state.loggedIn){
                return <PassedComponent />;
            }
            else{
                return <Login />
            }
        }
    };

export default Authenticate;