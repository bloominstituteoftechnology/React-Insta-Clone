import React from 'react';
import  like from "../../assets/likecons.png";
import liked from "../../assets/likedcons.png"

const Likes = props => {
  return (
    <div className="pbody" key="likes-icons-container" onClick={props.incrementLike} >
      <img alt="like comment icons"  className="likecons"  src={like} id="likes" onclick ={props.changeImg} />
      <div className="likes">{props.likes} likes</div>
    </div>
  )
};



export default Likes;
