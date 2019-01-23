import React from 'react';
import './Post.css';
import Post from './Post';

const PostContainer = props => {
  return(
    <div className="post_container">
      {props.data.map((data, index) =>(
        <Post
         key={index}
         data={data} />
      ))}
    </div>
  )
}

export default PostContainer;
