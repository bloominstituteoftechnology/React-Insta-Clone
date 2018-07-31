import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import PostHeader from '../PostContainer/PostHeader.js';



const Posts = props => {
  return(
    <div>
     <PostHeader 
        username={props.posts.username}
        thumbnailUrl={props.posts.thumbnailUrl}
     />
     <div>
         <img
            alt="post thubmnail"
            className="post-image"
            src={props.posts.imageUrl}
          />
     </div>
        <CommentSection comments={props.posts.comments}/>
    </div>
   );
};


export default Posts;
