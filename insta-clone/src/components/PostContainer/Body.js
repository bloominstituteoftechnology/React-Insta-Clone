import React from 'react';
import './PostContainer.css';


const Body = (props) =>{
    return (
       <div className="body-container">
        <img src={props.postPic} />
       
       </div>
    );
};

export default Body;