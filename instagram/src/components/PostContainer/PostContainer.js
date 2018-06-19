import React from 'react';
import './PostContainer.css';
import Post from './Post';

const PostContainer = (props) => {
  return(
    <ul className="post-container">
      {props.searchData.map((post) => {
        return <Post key={`${Math.random()}${post.originalIndex}`} postData={post} addNewComment={props.addNewComment} addLike={props.addLike} postIndex={post.originalIndex} />
      })}
    </ul>
  );
};

export default PostContainer;