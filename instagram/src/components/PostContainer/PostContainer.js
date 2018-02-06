import React from 'react';

function PostContainer(props) {
  return (
    props.dd.map((post, index) => {
    return (
      <div className="postStyle"  key={index}>
        <div><img className="thumbnail" src={post.thumbnailUrl}/></div><div>{post.username}</div>
        <img className="postImage" src={post.imageUrl}/>
      </div>
    )
      }));
  
  }
export default PostContainer;