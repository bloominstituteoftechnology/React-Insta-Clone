import React from 'react';
import './posts.css';
import Post from './Post.js';


const PostContainer = (props) => {
  return (
    <main className="main-body">
      {props.postData.map((post, index) => <Post 
        key={index} 
        username={post.username}
        userThumbnail={post.thumbnailUrl}
        image={post.imageUrl}
        likes={post.likes}
        timestamp={post.timestamp}
        comments={post.comments}
      />)}
    </main>
  );
}

export default PostContainer;