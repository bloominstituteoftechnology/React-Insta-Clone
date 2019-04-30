import React from 'react';
import CommentSection from '../CommentSection/commentscontainer';
import PostHeader from './postheader';



export default function Post(props){
  return(
    <div className='post'>
    <PostHeader
    username={props.post.username}
    thumbnailUrl={props.post.thumbnailUrl}/>
    <div className='postimg'>
    <img alt='postimage' className='postimage' src={props.post.imageUrl}/>
    
    </div>
    <CommentSection comments={props.post.comments}/>
   
    
    </div>
  )
}