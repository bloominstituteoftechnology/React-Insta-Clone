import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import moment from 'moment';
import PostHeader from './PostHeader';
import IconContainer from './IconContainer';
import CommentEnterField from './CommentEnterField';

 const PostContainer = (props) =>{
   return(
    <div className="post">
      
      <PostHeader userdisplay={props.data.username} thumbnail={props.data.thumbnailUrl} />
       
    <div className='postImageContainer'><img alt='postimage' src={props.data.imageUrl}></img> </div> 
    <IconContainer id={props.id} method={props.methods[1]}/>
    <div className="likes">{props.data.likes} likes</div>
   < CommentSection methods={props.methods[2].bind(this)} data={props.data.comments} />
    <div className='timeStamp'> {moment(props.data.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}</div>
    <div className='commentBar'/>
    <CommentEnterField id={props.id} method={props.methods[0]} />
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