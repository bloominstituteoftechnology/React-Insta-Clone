import React from 'react';
import './PostContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import {  faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';


 const PostContainer = (props) =>{
   return(
    <div className="post">
      <div className="row header">
        <div className='userIcon'> <img alt='usericon' className="userIcon" src={props.data.thumbnailUrl}></img> </div>     
        <div className='userName'> {props.data.username}</div>
      </div>
    <div className='postImageContainer'><img alt='postimage' src={props.data.imageUrl}></img> </div> 
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
    <input type='text' id={props.id} className='commentSubmitField' placeholder='Add a comment...' onKeyUp={props.methods}></input>
    <FontAwesomeIcon className="icon moreIcon" icon={faEllipsisH} />
    </div>
    </div>
  )
}
PostContainer.PostContainer = {
  data: PropTypes.shape({
      username:PropTypes.string.isRequired,
      thumbnailUrl:PropTypes.string.isRequired,
      imageUrl:PropTypes.string.isRequired,
      likes:PropTypes.number.isRequired,
      timestamp:PropTypes.string.isRequired,
      comments:PropTypes.array.isRequired,
  })
}

export default PostContainer;