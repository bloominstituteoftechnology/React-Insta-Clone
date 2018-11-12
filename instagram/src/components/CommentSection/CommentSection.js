import React from 'react';
import PropTypes from 'prop-types';
// import PostContainer from '../PostContainer/PostContainer';


const CommentSection = (props) => {
    return (
        <div>
            {props.post.username}
            <img src={props.post.thumbnailUrl} alt='thumbnail' />
            
            {props.post.imageUrl}
            {props.post.likesUrl}
            {props.post.timestampUrl}
            {props.post.commentsUrl}

        </div>
    );
}
CommentSection.propTypes = {
    post: PropTypes.shape ({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf ({
            username: PropTypes.string,
            text: PropTypes.string,
        })
    })
}

export default CommentSection;