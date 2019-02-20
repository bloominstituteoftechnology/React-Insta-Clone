import React from "react"


const authenticate = (App)=>(Login)=>props=>{
    if(localStorage.getItem("userInput")){
        return <App />
    }else{
        return <Login />
    }

}

export default authenticate;