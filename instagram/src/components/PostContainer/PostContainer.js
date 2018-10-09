import React from 'react';
import CommentSection from "./CommentSection.js";


const PostContainer = props => {
let postArray = props.dummyData.map(item => {
        return {comments:item.comments,
        username:item.username} 
    }   
    );
    console.log(postArray)
 let commentsArray = postArray.map(item => {
   return <CommentSection comments = {item.comments} key={item.username}/>; 
   }   
);

return <div>
   {commentsArray}
   </div> 
 };

  
export default PostContainer;
  
  