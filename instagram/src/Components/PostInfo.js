import React from 'react';
import './postContainer.css';
import PostContainer from './PostContainer'


const PostInfo = (props) => {
    return(
        <div className='main'>
            {props.post.map(item => 
            <PostContainer key={item.timestamp} obj={item}/>)}    
        </div>
    )
    
}

export default PostInfo