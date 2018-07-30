import React from 'react';
import CommentsSection from '../CommentSection/CommentSection.js';



const PostContainer = props => {
  return(
    <div>
    {props.dummyData.comments.map(comments => <CommentsSection key={comments.text} comments={comments}/>)}
    
    </div>
   );
};


export default PostContainer;
