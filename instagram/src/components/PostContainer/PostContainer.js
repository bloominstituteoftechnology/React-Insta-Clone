import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';



const PostContainer = ({postData}) => { // why does passing in {postData} work?
  return (
    <div >
      <div>
        <img src={postData.thumbnailUrl}/>
        <b>{postData.username}</b>
      </div>
      <div>
        <img src={postData.imageUrl}/>
      </div>
      <CommentSection comments={postData.comments} />
    </div>
    //comment section

      // .comments .timestamp


  );
};

export default PostContainer;