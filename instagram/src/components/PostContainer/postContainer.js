import React from 'react';
import './PostContainer.css';
// import UserPicAndName from  './UserPicAndName';
// import PostedImage from  './PostedImage';
// import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';



const PostContainer = props => {
  return (
    <div className="post-container-wrapper">

      {/* <UserPicAndName />

      <PostedImage /> */}

    
      {props.posts.map(item => <Post key={item.imageUrl} post={item} />

      // <CommentSection 
      // key={item.username} 
      // data={item.comments} 
      // />
      )}
      <div className="time-stamp">2 HOURS AGO</div>

    </div>
   );
};
 
export default PostContainer;