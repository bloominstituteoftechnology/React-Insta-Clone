import React from 'react';
import "./postcontainer.css";


const PostContainer = props => (

<div className="posts-container-wrapper">
<img src= {props.thumbnailUrl} alt = "User" 
className= "post-thumbnail" />   

<div>{props.username} </div>

</div>


    
);

export default PostContainer;