import React from 'react';
import ReactDOM from 'react-dom'
import CommentSection from './../CommentSection/CommentSection'
import PropTypes from 'prop-types';
const PostContainer = (props) => {

  return (
    
    <div>
       {props.post.map((post, index) => {

         return (
          <div key = {post.timestamp}>
           <div>{post.username}</div>
           <div><img src ={post.thumbnailUrl} alt = "icon" ></img></div>
           <div><img src ={post.imageUrl} alt= "Something"></img> </div>
           <div>{post.likes}</div>
           <div>{post.timestamp}</div>
           <CommentSection 
           comm = {post.comments}/>
           </div>
         )  
       }
       )
      }
       </div>  
  )
    }
    PostContainer.propTypes = {
        post: PropTypes.shape({
          username: PropTypes.string,
          comments: PropTypes.string
        })
    }
      

export default PostContainer;
