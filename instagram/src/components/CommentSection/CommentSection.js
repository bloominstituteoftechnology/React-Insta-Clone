import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function CommentSection(props) {
    return (
        <div className="CommentSectionDiv">
            {props.comments.map((element, index) => {
            return <Comment comment={element} key={index}/>
            })}
            <input type="text" placeholder="Leave a comment.." />
        </div>
        
    )
}

CommentSection.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        text:PropTypes.string,
    })
}

export default CommentSection;