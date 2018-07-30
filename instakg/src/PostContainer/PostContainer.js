import React from 'react';
import './PostContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import CommentSection from '../CommentSection/CommentSection';

 const PostContainer = (props) =>{
   return(
    <div className="post">
      <div className="row header">
        <div className='userIcon'> <img className="userIcon" src="https://static-cdn.jtvnw.net/jtv_user_pictures/e91a3dcf-c15a-441a-b369-996922364cdc-profile_image-300x300.png"></img> </div>     
        <div className='userName'> testName</div>
      </div>
    <div className='postImageContainer'><img src="https://static-cdn.jtvnw.net/jtv_user_pictures/e91a3dcf-c15a-441a-b369-996922364cdc-profile_image-300x300.png"></img> </div> 
    <div className='row iconRow'>
    
      <FontAwesomeIcon className="icon" icon={faHeart} />
      <FontAwesomeIcon className="icon" icon={faComment} />
    </div>
    <div className="likes">373 likes</div>
    <CommentSection />
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