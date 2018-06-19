import React from 'react';
import PropTypes from "prop-types"

const Post = props => {
    return (
    <div>Username: {props.post.username}
    Likes: {props.post.likes}
    </div>); 
    };
    
    Post.propTypes = {
        post: PropTypes.shape({
        username: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.array
    })

    };
    export default Post;