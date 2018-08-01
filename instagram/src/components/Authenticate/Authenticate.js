import React, {Component} from 'react';
import Login from '../Login/Login';

const Authenticate = (App) => 
    class extends Component {
        constructor(props){
            super(props);
            this.state = {
                login: false
            }
        }

        componentDidMount() {
            if(!localStorage.getItem("user")) {
                this.setState({login: false});
            } else {
                this.setState({login: true});
            }
        }


        render() { 
            if (this.state.login) {
                return ( <App /> );
            } else {
                return ( <Login /> );
            }
            
        }
    }
     

    export default Authenticate;
