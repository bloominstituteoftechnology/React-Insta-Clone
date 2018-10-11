import React from "react";
import PropTypes from "prop-types";
import PostContent from "./PostContent";
import CommentSection from "../CommentSection/CommentSection";
import {PostWrapper} from "../../styles";
import "./PostContainer.css";


const PostContainer = props => {
    return (
        props.posts.map(post => {
            return (
                <PostWrapper key={post.timestamp}>
                    <PostContent 
                    post={post}
                    addLikes={props.addLikes} 
                    />
                    <CommentSection
                    post={post}
                    />
                </PostWrapper>
            );
        })
    )
}

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
  };

 export default PostContainer;