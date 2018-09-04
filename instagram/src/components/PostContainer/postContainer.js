import React from 'react';
import './PostContainer.css';
import UserPicAndName from  './UserPicAndName';
import PostedImage from  './PostedImage';
import CommentSection from '../CommentSection/CommentSection';



const PostContainer = props => {
  return (
    <div>

      <UserPicAndName />

      <PostedImage />

      {props.anything.map(item =>
      <CommentSection 
      key={item.username} 
      data={item.comments} 
      />
      )}
      <div className="time-stamp">2 HOURS AGO</div>

    </div>
   );
}
 
export default PostContainer;