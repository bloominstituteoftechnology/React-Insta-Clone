
import React from "react";
import heart from '../../images/Instagram-Heart.png';
import './PostContainer.css';

const PostContainer = (props) => {
    return (
      <div className="mainpart"> 
      <div>
          <img  className="secondimg"src={props.item.thumbnailUrl}></img>

        <span className="username">{props.item.username} </span> 
          </div>
          {console.log(props)}
          <img  className="firstimg" src={props.item.imageUrl}></img>

          <img src={props.item.heart}></img>

          <div>
          <img src={heart}></img>
          <i class="far fa-comment"></i>
          </div>
          <h1>327<span>likes</span></h1>    
          
      </div>    
    )

}

export default PostContainer




