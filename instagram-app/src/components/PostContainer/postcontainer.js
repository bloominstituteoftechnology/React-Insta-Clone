    
import React from 'react';
import Post from './post';



export default function PostsContainer(props){
  return(
    <div className='posts-container'>
    {props.posts.map(x=>
      <Post key={x.imageUrl}
      post={x}/>
      )}
    
    
    </div>
  )
}
