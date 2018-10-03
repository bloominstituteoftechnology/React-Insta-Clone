import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = props => {
  return (
      <div className="post-container">
        {props.dummyData.map((data) => 
          <div>
            <p>{data.username}</p>
            <img src={data.imageUrl}></img> 
            <CommentSection username={data.username}
                            imageUrl={data.imageUrl}
            />
            
          </div> 
        )}
      </div> 
    )
}


export default PostContainer; 