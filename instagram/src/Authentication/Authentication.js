import React from "react";
import dummyData from "../dummy-data";




// const Authenticate = App => {
    class Authenticate extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                username: props.username,
            }
        }
        
        authUser = () => {
            

            
        }


        render(){
            return <App /> 
        }
    
    }



export default Authenticate;