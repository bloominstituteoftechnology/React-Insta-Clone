import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = props => {
  return (
      <div className="post-container">
        {props.dummyData.map((data) => 
          <div>
            <CommentSection username={data.username}
                            imageUrl={data.imageUrl}
            />
            
          </div> 
        )}
      </div> 
    )
}


export default PostContainer; 