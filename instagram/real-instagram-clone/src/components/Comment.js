import React from 'react'
import '../App.css'
const Comment = (props) =>{
    
    return(
        <div className ="comment-wrapper">
        <div className= "comment">

            <div className ="comment-container"><h3>{props.username}</h3> <div ><p className ='text'>{props.text}</p></div></div>
            {/* <p>{props.username}</p> */}


        </div>
        </div>
    )
}
export default Comment