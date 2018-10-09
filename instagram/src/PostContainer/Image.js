import React, {Component} from 'react';
const Image =(prop)=>{
    return (
        <div>
            <img className='main-image' src={prop.ImageUrl} alt="main image"></img>
        </div>
    )
}
export default Image;