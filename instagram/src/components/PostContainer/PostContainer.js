import React from "react";
import PropTypes from "prop-types";
import PostContent from "./PostContent";
import CommentSection from "../CommentSection/CommentSection";


const PostContainer = props => {
    return (
        props.posts.map(post => {
            return (
                <PostContent 
                post={post} 
                />
                <CommentSection
                post={post}
                />
            );
        })
    )
}

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
  };

 export default PostContainer;