import React from 'react'
import Login from '../Login/Login';

const Authenticate = (PassedComponent) => {
    return class extends React.Component{
        constructor(){
            super()
            this.state = {
                loggedIn: false,
            }
        }
        componentDidMount(){
            if(localStorage.getItem('Username') !== null){
                this.setState({
                    loggedIn:true,
                })
            }else{
                this.setState({
                    loggeIn:false,
                })
            }
        }
        render(){
            if(this.state.loggeIn === false){
                return <Login />
            }else{
                return <PassedComponent />;
            }     
        }
    }
}

export default Authenticate;