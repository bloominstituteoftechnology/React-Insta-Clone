import React from 'react';
import PostInstance from '../PostInstance/PostInstance.js'
//import Comment from '../CommentSection/Comment.js'
import CommentFeed from '../CommentSection/CommentFeed.js'


const PostStream= props => {
let currentPostArray = props.filteredPosts.map(item => {
  console.log(props.filteredPosts)
  return <PostInstance key={item.likes} username={item.username} likes={item.likes} timestamp={item.timestamp} comments={item.comments} />
}   
);
let commentObjectArray = props.filteredPosts.map(item => {
  console.log(props.filteredPosts)
  return item.comments
}  
);
console.log(commentObjectArray)
  return (
    <div id="postStream">
     PostStream
     {currentPostArray}
 <CommentFeed> </CommentFeed> 
    </div>
  );
};

export default PostStream;


