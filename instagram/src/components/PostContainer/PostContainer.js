import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import heart from '../../heart.svg';
import convo from '../../convo.svg';
import './PostContainer.css';
import PropTypes from "prop-types";


class PostContainer extends React.Component {


    render(){
      return (
          <div>
            {this.props.userpost.map(user => {
                return(
                <div className="postContainer">
                    <div className="userInfo">
                        <img src={user.thumbnailUrl} width="50px" />
                        <h2>{user.username}</h2>
                    </div>
                    <img src={user.imageUrl} id="instaImg"/>
                    <div className="icons">
                        <img src={heart} width="25px"/>
                        <img src={convo} width="25px"/>
                    </div>
                    <h2 id="likes">{user.likes} likes</h2>
                    <CommentSection 
                    comment={user.comments}
                    time={user.timestamp} />
                </div>
                )
            })}
            </div>
      )
    }
}
      
  PostContainer.propTypes = { username: PropTypes.string.isRequired, thumbnailUrl: PropTypes.string.isRequired, imageUrl: PropTypes.string.isRequired, likes: PropTypes.number.isRequired };

  export default PostContainer;