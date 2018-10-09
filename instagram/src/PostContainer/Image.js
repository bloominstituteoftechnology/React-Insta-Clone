import React, {Component} from 'react';
const Image =(prop)=>{
    return (
        <div>
            <img src={prop.ImageUrl} alt="main image"></img>
        </div>
    )
}
export default Image;