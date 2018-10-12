import React from 'react';
import LogIn from '../components/LogIn/logIn';
import Application from '../App';

const Authenticate = App => 
    class extends React.Component {
        constructor(){
            super();
            this.state={
                loggedin: false,
                username: '',
            }
        }
        render(){
            if(!this.state.loggedin){
                return(
                    <LogIn />
                )
            } else {
                return(
                    <Application />
                )
            }
        }
    }

    export default Authenticate;