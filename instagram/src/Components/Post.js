import React from "react";
import PropTypes from "prop-types";
import "../App.css"

const Post = props => {
    return (
        <div className="images">
            <div className="top">
            <img src={props.thumbnail} className="thumbnail" />
           <p className="username">{props.username}</p> 
           </div>
            <img src={props.image} />
        </div>
    )
}

export default Post;