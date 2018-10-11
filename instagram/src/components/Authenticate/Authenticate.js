import React from 'react';
import Login from '../Login/Login.js';

const Authenticate = (App) => 
   
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn : true
            };
        }

        componentDidMount = () => {
            console.log("componentDidMount ", this.state.loggedIn);
            if (!localStorage.getItem('user')) {
                 this.setState({ loggedIn : false });
            } else {
                 this.setState({ loggedIn : true });
            }
        }  
        
        render() {
            console.log("Inside render " ,this.state.loggedIn);
            if(this.state.loggedIn) {
                return  <App />
            } else {
                return  <Login status = {this.state.loggedIn}/>
            }
        }
};

export default Authenticate;