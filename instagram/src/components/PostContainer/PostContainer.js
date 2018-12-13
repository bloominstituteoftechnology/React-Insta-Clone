import React from 'react';
import ReactDOM from 'react-dom'

const PostContainer = (props) => {

  return (
    
    <div>
       {props.post.map((post, index) => {

         return (
          <div key = {index}>
           <div>{post.username}</div>
           <div>{post.thumbnailUrl}</div>
           <div><img src ={post.imageUrl} alt= "Something"></img> </div>
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
