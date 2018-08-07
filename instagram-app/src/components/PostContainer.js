
import React from '../../node_modules/react';
import CommentSection from './CommentSection';
import './css/PostContainer.css';
import PropTypes from '../../node_modules/prop-types';

const PostContainer = props => {
    return (
        <div class="container">
            <div>
              <img alt="user logo" class="avatar" src={props.content.thumbnailUrl}></img>
              <p class="username">{props.content.username}</p>
            </div>
            <br></br>
            <div>
              <img alt="main post" src={props.content.imageUrl}></img>
              <i class="far fa-heart"></i>
              <i class="far fa-comment"></i>
            </div>
  
            <div>
              <p class="likes">{props.content.likes} likes</p>
            </div>
  
            <comments>
              <div>{props.content.comments.map(each => <CommentSection comments={each} />)}</div>
            </comments>
            <replace>2 hours ago</replace>
            <br></br>
            <br></br>
            <add>
              <input class="inputComment" type="text" placeholder="Add a comment..."></input>
            </add>
        </div>
      
    )
  };

PostContainer.propTypes = {
  thumbNailUrl: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
}


  export default PostContainer;