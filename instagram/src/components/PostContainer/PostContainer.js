import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
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
                    <CommentSection 
                    comment={user.comments}
                    likes={user.likes}
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