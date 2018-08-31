import React from 'react';
import './commentSection.css';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentSection = (props) => {
    return (
        <div>
            <h5>{props.post.likes} likes</h5>
            {props.comments.map(comment => <Comment comment={comment}/>)}
        </div>
    )
}

CommentSection.propTypes = {
    commentSectionObject: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.object,
        comments: PropTypes.array
    })
}

export default CommentSection;