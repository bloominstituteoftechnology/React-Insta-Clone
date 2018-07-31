import React from 'react';
import Posts from '../PostContainer/Posts.js';



const PostContainer = props => {
  return(
    <div>
    {props.posts.map(post => <Posts key={post.text} posts={post}/>)}
    </div>
   );
};


export default PostContainer;
