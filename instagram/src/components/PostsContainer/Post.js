import React from 'react';
import heart from '../Icons/heart.png';
import combubble from '../Icons/combubble.png'


const Post = props => {
  return (
    <div className="post">
      <div className="post-head">
        <img src={props.thumbnailUrl} alt="thumbnail" className="thumbnail"/>
        <p className="username">{props.username}</p>     
      </div>

      <img src={props.imageUrl} alt="main" className="image" />
      <img src={heart} alt="instacamera" className="heart" 
        onClick={props.increment}/>
      <img src={combubble} alt="instacamera" className="instacamera"/>
      <p className="likes">{props.likes} likes</p>
      <p>{props.timestamp}</p>
    </div>
  )
}

export default Post