import React from "react";
import "../../../src/index.css";

const Post = props => {
    return (
        <div className="images">
            <div className="top">
            <img src={props.thumbnail} className="thumbnail" alt="thumbnail icon" />
           <p className="username">{props.username}</p> 
           </div>
            <img src={props.image} alt="main post" />
        </div>
    )
}

export default Post;