import React from "react"


const SingleComment = (props)=>{
    return (
        <div className="user-section">

            <h5>{props.username}</h5>
            <p className="text">{props.text}</p>
        </div>
    )
}

export default SingleComment;