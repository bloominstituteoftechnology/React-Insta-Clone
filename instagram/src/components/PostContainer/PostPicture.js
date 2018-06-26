import React from 'react';

const PostPicture = props => {
    return (
        <div className = "post-picture">
            <img src =  {props.post.imageUrl} alt = "" /> 
        </div>
        )
    };


export default PostPicture;