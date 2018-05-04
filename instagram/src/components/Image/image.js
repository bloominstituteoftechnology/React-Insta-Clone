import React from 'react';
import "./Image.css";

const Image = props =>{
    return (
        <div key={props.picture.imageUrl}>
            <img className='post' src={props.picture.imageUrl} alt="the post goes here"/>
        </div>
    )
}

export default Image;

