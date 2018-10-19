import React from 'react';
import Login from '../Login/Login.js'


const Authenticate=(passedInComponent)=>class extends React.Component{
    constructor (props){
        super(props);
        this.state={
            loggedIn: false
        }
    }
    componentDidMount(){
        if(localStorage.getItem("username")){
            this.state.loggedIn=true;
        };
    }
    render(){
        if(this.state.loggedIn=true){
            return(
                <passedInComponent/>
            )}else{
                return(
                    <Login onSubmit={this.onLogin} onChange={this.onSearchChange}/>
                )
            }

      
    }
}

export default Authenticate