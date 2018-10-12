import React from 'react';
import PostInstance from '../PostInstance/PostInstance.js'
import Comment from '../CommentSection/Comment.js'
//import CommentFeed from '../CommentSection/CommentFeed.js'


const PostStream= props => {
let currentCommentArray =[]
let currentPostArray = props.filteredPosts.map(item => {
  currentCommentArray.push(item.comments)
 return <PostInstance key={item.likes} username={item.username} likes={item.likes} timestamp={item.timestamp}/>
}   
);
let i;
let commentArray =[]
console.log(currentCommentArray)
for(i=0; i>currentCommentArray.length; i++) {
  commentArray.push(<Comment key={[i].username} username={[i].username} text={[i].text} />)
}
console.log(commentArray)
 //


  return (
    <div id="postStream">
     PostStream
     {currentPostArray}
    </div>
  );
};

export default PostStream;


