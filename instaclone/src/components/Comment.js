import React from "react"
import "./head.css"
import Form from "./Form"
import PropTypes from "prop-types";
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

Comment.propTypes = {
    username : PropTypes.string,
    text:PropTypes.string.isRequired
}

Comment.defaultProps = {
    text : "This text Will be generated if no text is given",
    username :"An anonymous username"
}