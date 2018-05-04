import React from 'react';
import "./image.css";

const Image = props =>{
    return (
        <div key={props.picture.imageUrl}>
            <img className='post' src={props.picture.imageUrl} alt="pictures of stuff"/>
        </div>
    )
}

export default Image;

