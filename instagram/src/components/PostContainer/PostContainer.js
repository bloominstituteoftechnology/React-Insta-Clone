import React from 'react';
import './PostContainer.css';
import Post from './Post';

const PostContainer = (props) => {
  return(
    <ul className="post-container">
      {props.instagramData.map((post, index) => {
        return <Post key={`${Math.random()}${index}`} postData={post} addNewComment={props.addNewComment} addLike={props.addLike} postIndex={index} />
      })}
    </ul>
  );
};

export default PostContainer;