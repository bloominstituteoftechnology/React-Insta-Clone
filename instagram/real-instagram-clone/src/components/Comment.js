import React from 'react'
import '../App.css'
const Comment = (props) =>{
    
    return(
        <div className= "comment">
            <h3>{props.username}</h3> <div ><p className ='text'>{props.text}</p></div>
            {/* <p>{props.username}</p> */}


        </div>
    )
}
export default Comment