import React from 'react';
import LogIn from '../LogIn/Login.js';

const Authenticate = App => {
    return class extends React.Component {
        constructor(App){
            super(App);
            this.state = {
                isLoggedIn: false
            }
            console.log("Inside auth for props", App);
            
        }

        componentDidMount(){
            console.log("in auth", App);
            
        }

        render(){
           return <App />
        }
    }

}
export default Authenticate;