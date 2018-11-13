import React, { Component } from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';



const Comment = props => {

    return(
        <div className='comment'>
            <p><span>{props.comment.username}</span> {props.comment.text}</p>
        </div>
    );
}



export default Comment;