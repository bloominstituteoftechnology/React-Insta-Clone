import React from "react";
import PostContainer from './PostContainer'


const Post = (props) => {
    return (
      <div>
          {
             props.data.map((item) => {
                 return <PostContainer item={item} />
             }) 
          }
      </div>    
    )

}

export default Post




