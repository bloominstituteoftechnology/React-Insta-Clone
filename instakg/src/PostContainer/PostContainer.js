import React from 'react';
import './PostContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import {  faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import CommentSection from '../CommentSection/CommentSection';

 const PostContainer = (props) =>{
   return(
    <div className="post">
      <div className="row header">
        <div className='userIcon'> <img className="userIcon" src={props.data.thumbnailUrl}></img> </div>     
        <div className='userName'> {props.data.username}</div>
      </div>
    <div className='postImageContainer'><img src={props.data.imageUrl}></img> </div> 
    <div className='row iconRow'>
    
      <FontAwesomeIcon className="icon" icon={faHeart} />
      <FontAwesomeIcon className="icon" icon={faComment} />
    </div>
    <div className="likes">{props.data.likes} likes</div>
    <div className="commentBox">
    { props.data.comments.map((element,index) => {
        return < CommentSection key={index} data={element} />

    } )}
    </div>
    <div className='timeStamp'> 2 HOURS AGO</div>
    <div className='commentBar'/>
    <div className="row AddComment">
    <span className="commentSubmitField">Add a comment...</span>
    <FontAwesomeIcon className="icon moreIcon" icon={faEllipsisH} />
    </div>
    </div>
  )
}


export default PostContainer;