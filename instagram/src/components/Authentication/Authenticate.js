import React from "react";
import Login from "./../Login/Login";
const Authenticate = WrappedApp =>{
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state={isLoggedIn :false}
        }

        componentWillMount () {
            console.log(localStorage.getItem("user"))
            if (localStorage.getItem("user")) {
                this.state.isLoggedIn = true;
            } else {
                this.state.isLoggedIn = false;
            }
        }
//we are doing componentWillMount because we want to check it before render, hence not doing componentDidMount
        render(){
            console.log(this.state.isLoggedIn)
            if (this.state.isLoggedIn) {
                return <WrappedApp/>
            } else {
                return <Login />
            }
        }
    }
};

export default Authenticate


