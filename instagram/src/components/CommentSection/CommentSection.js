import React, { Component } from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";
//import Moment from 'react-moment';

const CommentSection = props => {
    return(
        <div className="commentSectionContainer">
            
            <h2>{props.coolData.username}</h2>
            <p>{props.coolData.text}</p>
        </div>
    )



}



CommentSection.propTypes = {
    coolData: PropTypes.shape(
            {username: PropTypes.string,
            text: PropTypes.string}
        )
    
}

export default CommentSection;