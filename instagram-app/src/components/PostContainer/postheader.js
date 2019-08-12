import React from 'react';


export default function PostHeader(props){
  return(
    <div className='post-header'>
    <img alt='userimg' className='userimg' src={props.thumbnailUrl}/>
    <div className='username'>
      {props.username}
    </div>
    
    
    </div>
  )
}