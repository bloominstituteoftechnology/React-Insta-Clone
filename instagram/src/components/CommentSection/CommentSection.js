import React, { Component } from "react";
import "../PostContainer/PostContainer.css";

const CommentSection = props => {
    return(
        <div>
            
            <span>{props.dataInMap.username}</span>
            <span>{props.dataInMap.text}</span>
        </div>
    )



}

export default CommentSection;