import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import PropTypes from 'prop-types';


//recieve props from app.js with comments then pass it to commentSection

const PostContainer = props => {
  return (

    <div className="post-container" data={props.data}>
      {console.log(props)}
      <div className="row">
        <img className="thumbnail" src={props.data.thumbnailUrl} alt="thumbnail"></img>
        <p className="username">{props.data.username}</p>
      </div>
      <img className="main-photo" src={props.data.imageUrl} alt="main"></img>
      <div className="row">
        <img className="heart" src="https://www.freepngimg.com/download/instagram/1-2-instagram-heart-transparent.png" alt="heart"></img>
        <img className="bubble" src="https://image.flaticon.com/icons/png/512/22/22302.png" alt="bubble"></img>
      </div>
      <div className="likes">{props.data.likes} likes</div>
      <CommentSection comments={props.data.comments} time={props.data.timestamp}/>
      <input className="add-comment" placeholder="Add a comment..."></input>

    </div>
  )
}

PostContainer.propTypes = {
  data: PropTypes.shape ({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.image,
    imgUrl: PropTypes.image,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  })
}
//check that data is the correct type

export default PostContainer;
