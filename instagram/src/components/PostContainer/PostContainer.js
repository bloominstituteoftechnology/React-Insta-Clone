import React from 'react';
import Header from './Header';
import CommentSection from '../CommentSection/CommentSection';
import Post from "./Post";

const PostContainer = props => {
 return (
   <div className='posts-container-wrapper'>
     {props.postList.map((item) =>
       <Post
          post={item}
       />
     )}
   </div>
 );
};

export default PostContainer;