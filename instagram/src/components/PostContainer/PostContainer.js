import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer=prop=>{
    return (
        <div>
            <img src={prop.data.thumbnailUrl} alt='thumbnail-img'/>
            <p>{prop.data.username}</p>
            <img src={prop.data.imageUrl} alt='post-img'/>
            <p>{prop.data.likes} likes</p>
            <CommentSection data={prop.data.comments}/>
            <p>{prop.data.timestamp}</p>
        </div>
    )
}
export default PostContainer;