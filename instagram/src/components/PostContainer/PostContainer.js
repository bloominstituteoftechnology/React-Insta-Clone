import React, { Component } from 'react';
import PostTitle from './PostTitle';
import PostImage from './PostImage';


const PostContainer = props => {
    return (
       <div>
          {props.posts.map(post => 
          <div>
           <PostTitle thumbnail={post.thumbnailUrl} username={post.username} />
           <PostImage image={post.imageUrl} />
           </div>
           
           )}
        </div>
        
    )
}


export default PostContainer;



