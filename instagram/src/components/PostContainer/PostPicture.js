import React from 'react';

const PostPicture = props => {
    return (
        <div className = "post-picture">
            {/* <img src =  {props.post.imageUrl} alt = "" />  */}
            <img src =  {props.imageUrl} alt = "" /> 
        </div>
        )
    };


export default PostPicture;