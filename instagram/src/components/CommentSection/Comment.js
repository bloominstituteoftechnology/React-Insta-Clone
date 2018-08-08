import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css'

const Comment = props => {
    return(
        <div>
            <div>
                {props.comments.map(comment => {
                    return(
                        <div key={comment.text}>
                            <p><strong>{comment.username}</strong> {comment.text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

Comment.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
};

export default Comment;