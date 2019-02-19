import React from "react"
import "./head.css"
const Comment = (props)=>{
    return (
        <div className="commentaire">
            {props.comments.map(elem=>
                <div>
                <h5>{elem.username}</h5>
                <p>{elem.text}</p>
                </div>)}

        </div>
    )
}

export default Comment;