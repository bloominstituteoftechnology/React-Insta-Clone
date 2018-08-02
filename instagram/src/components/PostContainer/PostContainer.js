import React from 'react';
import PostsPage from '../PostContainer/PostsPage.js';



const PostContainer = props => {
  return(
    <div>
    {props.posts.map(post => <PostsPage key={post.text} posts={post}/>)}

    </div>
   );
};


export default PostContainer;
