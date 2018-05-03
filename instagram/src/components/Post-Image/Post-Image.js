import React from 'react';
import "./Post-Image.css";

const PostImage = props => {
    return (
        <div>
            {props.dummyData.map(imageData => {
                return(
                    <div>
                        <img className="main-image" src={imageData.imageUrl} />
                    </div>
                )
            })}
        </div>
    )
}


export default PostImage;