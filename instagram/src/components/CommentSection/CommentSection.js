import React, { Component } from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";


const CommentSection = props => {
    return(
        <div className="commentSectionContainer">
            
            <h2>{props.dataInMap.username}</h2>
            <p>{props.dataInMap.text}</p>
        </div>
    )



}



CommentSection.propTypes = {
    dataInMap: PropTypes.shape(
            {username: PropTypes.string,
            text: PropTypes.string}
        )
    
}

export default CommentSection;