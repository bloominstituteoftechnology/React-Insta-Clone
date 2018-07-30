import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection'

const Post = props => {
    return(
        <div>
            <div>{props.post.username}</div>
            <img src={props.post.thumbnailUrl} alt="thumbnail"/>
            <img src={props.post.imageUrl} alt="imagepost"/>
            <div>{props.post.likes}</div>
            <div>{props.post.timestamp}</div>
            <CommentSection com={props.post} />
        </div>
    )
};

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailurl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
    })

};

export default Post;