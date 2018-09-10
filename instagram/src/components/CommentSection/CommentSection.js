import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentSection.css';

function CommentSection(props) {
    return (
        <div className="CommentSectionDiv">
            {props.comments.map((element, index) => {
            return <Comment comment={element} key={index}/>
            })}
            <input type="text" placeholder="Add a Comment" />
        </div>
        
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;