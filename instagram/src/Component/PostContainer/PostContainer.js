
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
        
    
          <div>
          <img className = "likepic" src={heart}></img>
          <i class="far fa-comment"></i>
          </div>
          <h1>{props.item.likes}<span> likes</span></h1>    
          {
              props.item.comments.map((msg) => {
                  return (
                      <div><span>{msg.username}</span>  {msg.text} </div>
                  )
              })
          }
      </div>    
    )

}

export default PostContainer




