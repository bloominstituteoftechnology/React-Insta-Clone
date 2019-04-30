import React from 'react';
import CommentSection from '../CommentSection/commentscontainer';
import PostHeader from './postheader';
import LikeSection from './likesection';



export default function Post(props){
  return(
    <div className='post'>
    <PostHeader
    username={props.post.username}
    thumbnailUrl={props.post.thumbnailUrl}/>
    <div className='postimg'>
    <img alt='postimage' className='postimage' src={props.post.imageUrl}/>
    
    </div>
    <LikeSection likes={props.post.likes}/>
    <CommentSection comments={props.post.comments}/>
   
    
    </div>
  )
}