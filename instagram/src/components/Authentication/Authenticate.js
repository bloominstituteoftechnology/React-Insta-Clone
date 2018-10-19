import React from 'react';
import Login from '../Login/Login.js'


const Auth=(App)=>class extends React.Component{
    constructor (props){
        super(props);
        this.state={
            loggedIn: false
        }
    }
    componentDidMount(){
        if(localStorage.getItem("username")){
            this.setState({ loggedIn: true })
        };
    }
    render(){
        console.log("authenticate ran")
        console.log(localStorage.getItem("username"))
        console.log(this.state.loggedIn)
        if(this.state.loggedIn=true){
            return(
                <App/>
            )}else{
                return(
                    <Login onSubmit={this.onLogin} onChange={this.onSearchChange}/>
                )
            }

      
    }
}
export default Auth