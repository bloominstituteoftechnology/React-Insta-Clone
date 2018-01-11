import React from 'react';
//import comment section


const PostContainer = ({postData}) => {
  return (
    <div >
      <div>
        <h2>{postData.username}</h2>
        <img src={postData.thumbnailUrl}/>
      </div>
      <div>
        <img src={postData.imageUrl}/>
      </div>
    </div>
    //comment section
  );
};

export default PostContainer;