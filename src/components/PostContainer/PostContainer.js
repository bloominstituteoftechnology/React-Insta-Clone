import React from 'react';
import Post from './Post';
import Comment from '../CommentSection/Comment.js'

const PostContainer = (props) => {
  console.log(props);
   return(
     <div className="PostContainer">
       {props.posts.map(p => <Post handleChange ={props.handleChange} addNewComment={props.addNewComment} post={p}/>)}
     </div>
   )
}

export default PostContainer
