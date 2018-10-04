import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = props => {
  return (
      <div className="post-container">
        {props.dummyData.map((data) => 
          <div>
            <div className="usernameThumb">
              <img className="thumbnail" src={data.thumbnailUrl}/>
              <p>{data.username}</p>
            </div>
            <img src={data.imageUrl}></img> 
            <CommentSection username={data.username}
                            imageUrl={data.imageUrl}
                            likes={data.likes}
                            comments={data.comments}
                            timestamp={data.timestamp}
            />
          </div> 
        )}
      </div> 
    )
}


export default PostContainer; 