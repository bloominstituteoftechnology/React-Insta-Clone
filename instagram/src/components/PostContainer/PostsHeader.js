import React  from "react";
import './PostsHeader.css'

const PostsHeader = props => {
    return (
    <div className='posts-header'>
        <div className='img-wrap'>
            <img 
            className='post-img'
            src={props.thumbnailUrl}
            alt='Header for the post'
            />
        </div>
        Posts Header here
        <div>{props.username}</div>
    </div>  
    );
}

export default PostsHeader;