//PostContainer
import React from 'react';
import './PostContainer.css';
import CommentSection from './CommentSection';
import Post from './Post';


const PostContainer = props => {
  return (
        <div>
          {props.posts.map(item => <Post post={item} key={item.username}/>)}
        </div>
      );
}




export default PostContainer;
