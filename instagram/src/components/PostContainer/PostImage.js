import React from 'react';
import './PostImage.css'



const PostImage = props => {
    return (
        <div>
        <img className="post-image" src={props.image} alt="post" />
        </div>
    )
}







export default PostImage