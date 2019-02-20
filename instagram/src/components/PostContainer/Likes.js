import React from 'react'
import Post from './Post'
import './PostContainer.css'

const Likes = (props) => {
  return (
    <div className = "like-container"
        key="likes-icons-container"
        onClick={props.addLikes}>

       <div className="like-icons">
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
         </div>
           <p className = "num-likes"> {props.likes} likes</p>
    </div>
  );
}

export default Likes
