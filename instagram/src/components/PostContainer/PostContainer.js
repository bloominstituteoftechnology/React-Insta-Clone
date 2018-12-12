import React from 'react';
import ReactDOM from 'react-dom'

const PostContainer = (props) => {
  console.log(props);
  return (
    
    <div>
       {props.post.map(post => {

         return (
          <div>
           <div>{post.username}</div>
           <div>{post.thumbnailUrl}</div>
           <div>{post.imageUrl}</div>
           <div>{post.likes}</div>
           <div>{post.timestamp}</div>
           </div>
         )
        
       }
       )
      }
       </div>
  )
    }
      

export default PostContainer;
