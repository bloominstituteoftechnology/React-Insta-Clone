import React from 'react'
import Post from './Post'
import './PostContainer.css'

const Likes = (props) => {
  return (
    <div className = "like-container"
        key={props.index}
        onClick={props.addLikes}>

       <div className="like-icons">
            <i class="far fa-heart"></i>
            <i class="far fa-comment"></i>
         </div>
           <p className = "num-likes"> {props.like} likes</p>
    </div>
  )
}

export default Likes
