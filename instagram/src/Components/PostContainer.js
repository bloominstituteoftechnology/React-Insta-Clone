import React from 'react';


const PostContainer = props => (

<div className="posts-container-wrapper">
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </div>


    
)