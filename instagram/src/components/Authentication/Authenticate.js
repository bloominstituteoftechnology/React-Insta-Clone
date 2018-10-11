import React from 'react';
import Login from '../Login/Login';

const Authenticate = App => 
    class extends React.Component{
        constructor(props){
            super(props);
            this.state ={
                logIn: false
            };
        }

        componentDidMount(){
            if(!localStorage.getItem('user')) {
                this.setState({
                    logIn: false
                });
            } else{
                this.setState({
                    logIn: true
                });
            }
        }

        render(){
            if(this.state.logIn) return <App />;
            return <Login />
        }
    };

export default Authenticate