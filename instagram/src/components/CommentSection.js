import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentSection = (props) =>{
    return(
        <div>
            {props.comments.map((comment, index) =>{
                return(
                    <Comment comment={comment} key={index} />
            )})}
        </div>
    )
}

CommentSection.propTypes = {
    comment: PropTypes.object
}

export default CommentSection;