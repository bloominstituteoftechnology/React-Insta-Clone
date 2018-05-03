import React from 'react';
import "./Post-Image.css";

const PostImage = props => {
    return(
        <div>
            <img className="main-image" src={props.dummyData.imageUrl} alt="post" />
        </div>
    )
}


export default PostImage;