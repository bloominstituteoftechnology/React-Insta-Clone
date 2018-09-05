import React from 'react';
import Login from '../Login/Login';

const Authenticate = App => 
    class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount(){
            console.log(this.state.loggedIn);
            if(localStorage.length > 0){
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        }

        render() {
            if(this.state.loggedIn){
                return <div>{<App/>}</div>
            } else {
                return <div>{<Login/>}</div>
            }
    }
};




export default Authenticate;
