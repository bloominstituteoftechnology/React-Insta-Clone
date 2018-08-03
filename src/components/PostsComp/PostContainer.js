import React from 'react';
import Post from './Post.js';
import { Main } from './styledPosts';


const PostContainer = (props) => {
  return (
    <Main className="main-body">
      {props.postData.map((post, index) => <Post 
        key={index} 
        username={post.username}
        userThumbnail={post.thumbnailUrl}
        image={post.imageUrl}
        likes={post.likes}
        timestamp={post.timestamp}
        comments={post.comments}
        postId={post.imageUrl}
      />)}
    </Main>
  );
}

export default PostContainer;