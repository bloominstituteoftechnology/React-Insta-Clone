import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import Comments from '../CommentSection/CommentSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment} from '@fortawesome/free-regular-svg-icons';

class Post extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      likes:this.props.data.likes,
    }
  }

  addLike = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render(){
    const user = this.props.data;
    return (
      <div className="user_post">
        <div className="userInfo">
            <img className="user_icon" alt="user_icon" src={user.thumbnailUrl} />
          <div>
            <h2> {user.username} </h2>
          </div>
        </div>
        <div className="postContain">
          <img className="post_image" alt="user_post" src={user.imageUrl} />
        </div>
        <div className="interaction_container">
          <div onClick={this.addLike} className="user_interaction" alt="likes">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="user_interaction" alt="comment">
            <FontAwesomeIcon icon={faComment} />
          </div>
          {/* <img onClick={this.addLike} className="user_interaction" alt="likes" src="./../img/heart.png" /> */}
          {/* <img className="user_interaction" alt="comment" src="./../img/message.png" /> */}
        </div>
        <div className="interaction_container">
          <p>{this.state.likes} likes </p>
        </div>
        <Comments comments = {user.comments} time={user.timestamp}/>
      </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;