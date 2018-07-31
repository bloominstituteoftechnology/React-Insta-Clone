import React from 'react';
import './PostContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import {  faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import moment from 'moment';

 const PostContainer = (props) =>{
   return(
    <div className="post">
      <div className="row header">
        <div className='userIcon'> <img alt='usericon' className="userIcon" src={props.data.thumbnailUrl}></img> </div>     
        <div className='userName'> {props.data.username}</div>
      </div>
    <div className='postImageContainer'><img alt='postimage' src={props.data.imageUrl}></img> </div> 
    <div className='row iconRow'>
    
      <FontAwesomeIcon id={props.id}  onClick={props.methods[1]} className="icon" icon={faHeart} />
      <FontAwesomeIcon className="icon" icon={faComment} />
    </div>
    <div className="likes">{props.data.likes} likes</div>
   < CommentSection  data={props.data.comments} />
    <div className='timeStamp'> {moment(props.data.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}</div>
    <div className='commentBar'/>
    <div className="row AddComment">
    <input type='text' id={props.id} className='commentSubmitField' placeholder='Add a comment...' onKeyUp={props.methods[0]}></input>
    <FontAwesomeIcon className="icon moreIcon" icon={faEllipsisH} />
    </div>
    </div>
  )
}
PostContainer.propTypes = {
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