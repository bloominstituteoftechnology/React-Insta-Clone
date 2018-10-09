import React from "react";
import PropTypes from "prop-types";
import PostContent from "./PostContent";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";


const PostContainer = props => {
    return (
        props.posts.map(post => {
            return (
                <div>
                    <PostContent 
                    post={post} 
                    />
                    <CommentSection
                    comments={post.comments}
                    post={post}
                    />
                    <div className="post-container-footer">
                        <p>{post.timestamp}</p>
                        <input name="addComment" placeholder="Add a comment..."></input>
                    </div>
                </div>
            );
        })
    )
}

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
  };

 export default PostContainer;