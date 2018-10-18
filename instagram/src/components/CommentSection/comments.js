import React from 'react';
import PropTypes from 'prop-types';

import './comments.css' 

const Comments = props => {
    return (
        <div className="comments">
            <p>{props.post.likes} likes</p>
            {props.post.comments.map((comment, i) => {
                return (
                    <div className="comment">
                        <p className="commentName">{comment.username}</p>
                        <p className="commentText">{comment.text}</p>
                    </div>
                )
            })}
        </div >
    )
}

Comments.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
};

// comment.propTypes = {

//     username: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
// };

export default Comments;