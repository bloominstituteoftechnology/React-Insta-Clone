import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = props =>{
  console.log(props.posts)
  const posts = props.posts.map(post =>{
    console.log(post.comments)
    return (<div className = "post">
              <div className = "post-top">
                <img src = {post.thumbnailUrl}/>
                <span>{post.username}</span>
              </div>

              <img src = {post.imageUrl} />
              <CommentSection comments = {post.comments} />

            </div>
           )

  });
  return(<div>{posts}</div>);
}

export default PostContainer;
