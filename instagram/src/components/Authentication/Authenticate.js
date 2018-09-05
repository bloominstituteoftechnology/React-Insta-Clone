import React from 'react';
import App from '../../App';
import Login from '../Login/Login';

const Authenticate = App =>
    class extends React.Component{
        constructor(){
            super();
            this.state={
                loggedIn: false
            }
        }

        componentDidMount(){
            // event.preventDefault();
            if (localStorage.username){
                this.setState({loggedIn: true})         
            }
        }

        render() {
            if(this.state.loggedIn === false){
                return <Login />;
            } else{
                return <App />;
            } 
        }
    };



export default Authenticate;