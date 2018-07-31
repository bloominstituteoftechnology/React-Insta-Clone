import React from 'react';
import './PostContainer.css';

const Post=prop=>{
    return (
        <div>
            <div className='username'>
            <img className='thumbnail' src={prop.data.thumbnailUrl} alt='thumbnail-img'/>
            <p>{prop.data.username}</p>
            </div>
            <img className='post-img' src={prop.data.imageUrl} alt='post-img'/>
            <div className='icons'>
            <i className="far fa-heart fa-2x"></i>
            <i className="comment fa fa-flip-horizontal">
            <i className="far fa-comment fa-2x"></i>
            </i>
            </div>
            <p className='likes'>{prop.data.likes} likes</p>
        </div>
    )
}
export default Post;