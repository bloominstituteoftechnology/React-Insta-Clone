import React from 'react';
import Comment from './Comment.js';
//import PostStream from '../PostStream/PostStream.js;'

const CommentFeed= props => {
let currentCommentFeed = props.commentArray.map(item => {
return   <Comment key= {`${item.username}${item.text}`} username={item.username} text={item.text} />
 }   
  );

 
  return (
    <div>
      {currentCommentFeed}
    </div>
  );
};

export default CommentFeed;
