
import React from "react";
import heart from '../../images/Instagram-Heart.png';
import './PostContainer.css';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
    return (
      <div className="mainpart"> 
      <div>
      <img  className="secondimg"src={props.item.thumbnailUrl} alt="props.item.username"/>
        <span className="username">{props.item.username} </span> 
          </div>
          
          {console.log(props)}
          <img  className="firstimg" src={props.item.imageUrl} alt=""/>
        
    
          <div>
          <img className="likepic" src={heart} alt=""/>
          <i class="far fa-comment"></i>
          </div>
          <h1>{props.item.likes}<span> likes</span></h1>    
          {
              props.item.comments.map((msg) => {
                  return (
            <div><span className="commnents">{msg.username}</span>  {msg.text} </div>
                  )
              })
          }
      </div>    
    )

}

PostContainer.propTypes = {
    item: PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string
    })
  };

export default PostContainer




