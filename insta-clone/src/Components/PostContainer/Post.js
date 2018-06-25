import React from 'react';
import PropTypes from "prop-types";

const Post = props => {
    return <div> Post: {props.Post.username}</div> 
};

Post.propTypes = {
post: PropTypes.shape({
username: PropTypes.string,


})
}


export default Post;