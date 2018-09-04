import React from 'react';
import './PostContainer.css';
import UserPicAndName from  './UserPicAndName';
import PostedImage from  './PostedImage';



const PostContainer = () => {
  return (
    <div>

      <UserPicAndName />
      <PostedImage />

    </div>
   );
}
 
export default PostContainer;