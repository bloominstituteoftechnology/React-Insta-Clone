import React from "react";
import "./PostContainer.scss";
import CommentSection from "../CommentSection/CommentSection";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';


function postContainer(props) {
  return (
    /*<div className="postContainer">
      <div className ="topContent">
      <img src ={props.dummydata.thumbnailUrl}/>
      <p>{props.dummydata.username}</p>
      </div>
      <div className ="middleSection">
      <img src ={props.dummydata.imageUrl}/>
      </div>*/
      <div className="postContainer">
      <span className="user"><img className="profileImg" src={props.post.thumbnailUrl} alt="profileimg" /> <p className="username">{props.post.username}</p></span>
      <img src={props.post.imageUrl} alt="postImg" />
      <br />
      <span className="icons"> <FontAwesomeIcon icon={faHeart} />&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faComment} /></span>
      <br />
      <span className="likes">{props.post.likes} likes</span>
      <CommentSection comments={props.post.comments} />
    </div>
  );
}

/*
const PostContainer = props => {
  return(
      <div className="postContainer">

      </div>
  );
};
*/
export default PostContainer;