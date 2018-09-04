import React from 'react';
import PostContainer from './post-container.js';
import PropTypes from "prop-types";

const PostContainerList = (props) => {
    return <div class="container">{props.myPosts.map(onePost => <PostContainer key={onePost.timestamp} postcontainer={onePost}/>)}</div>;
};

PostContainerList.propTypes = {
    myPosts: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainerList;
