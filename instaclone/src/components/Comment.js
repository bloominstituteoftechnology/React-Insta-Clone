import React from "react"
import "./head.css"
import Form from "./Form"
const Comment = (props)=>{
    return (
        <div className="commentaire">
        <div className="icon">
            <i className="heart outline icon"></i>
            <i class="comments outline icon"></i>
         </div>
            {props.comments.map(elem=>
                <div className="user-section">
                <h5>{elem.username}</h5>
                <p className="text">{elem.text}</p>
                </div>)}

                <Form />
        </div>
       

    )
    
}

export default Comment;