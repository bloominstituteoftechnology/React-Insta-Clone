import React from "react";
import CommentSection from '../CommentSection/commentSection'
import "./postcontainer.css";
import Post from "../Post/Post";
import PropTypes from 'prop-types';

const PostContainer = props => {
  return (
      <div className='post-container'>
          {props.posts.map(post => (
              <div className='post-tunnel' key={post.timestamp}>
                  <Post post={post} />
                  <CommentSection comments={post.comments} likes={post.likes}/>
              </div>
          ))}
      </div>
  );
}

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;