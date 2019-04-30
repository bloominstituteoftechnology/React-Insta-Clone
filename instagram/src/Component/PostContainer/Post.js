import React from "react";
import PostContainer from './PostContainer'


const Post = (props) => {
    return (
      <div>
          {
             props.data.map((item) => {
                 return <PostContainer key={item.username} item={item} incrementLike={props.incrementLike}/>
             }) 
          }
      </div>    
    )

}

export default Post




