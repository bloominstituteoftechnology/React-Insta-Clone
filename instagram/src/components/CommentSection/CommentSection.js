import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentSection = (props) => {
    return(
        <div>
            {props.comments.map(comment => {
                return(
                    <Comment comment={comment.text} username={comment.username}/>
                );
            })}
        </div>
    );
}


CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
};
export default CommentSection;