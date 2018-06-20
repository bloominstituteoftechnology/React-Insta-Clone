import React from 'react';
import Login from '../components/Login/Login';

const Authenticate = App => 
    class extends React.Component {
        constructor(){
            super()
            this.state = {
                loggedIn: false,
            }
        }

        componentDidMount(){
            this.setState({loggedIn: localStorage.getItem("userName") === null ? false : true})
        }

        render() {
            if(this.state.loggedIn){
                return <App />;
            }
            else{
                return <Login />;
            }
            
        }
    }
    


export default Authenticate
