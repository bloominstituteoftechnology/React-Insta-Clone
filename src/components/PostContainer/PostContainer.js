import React from 'react';
import Post from './Post';
import Comment from '../CommentSection/Comment.js'
const PostContainer = (props) => {
  console.log(props);
   return(
     <div className="PostContainer">
{props.userData.map(userData => <Post userData={userData} addNewComment={props.addNewComment} handleChange ={props.handleChange}    />)}

     </div>
   )
}

export default PostContainer
