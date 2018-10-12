import React from 'react';
import './PostContainer.css';


const Body = (props) =>{
    return (
       <div className="body-container">
        <img className="post-pic" src={props.postPic} alt="user post"/>
       </div>
    );
};

export default Body;