import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.user.likes,
      heartColor: "black",
      alreadyHeart: false
    }
  }

  addLikeHandler = () => {
    let likes = this.state.likes;
    if(!this.state.alreadyHeart) {
      likes ++;
      this.setState({likes: likes, heartColor: "red", alreadyHeart: true});
    }
    else {
      likes --;
      this.setState({likes: likes, heartColor: "black", alreadyHeart: false});
    }
  }

  render() {
    return (
      <div className="post">
        <div className="name">
          <img className="thumbnail" src={this.props.user.thumbnailUrl} alt="Thumbnail" />
          <div className="username">{this.props.user.username}</div>
        </div>
        <img src={this.props.user.imageUrl} alt="post" className="postImg"/>
        <FontAwesomeIcon
          icon={['fas', 'heart']}
          size="3x"
          className="postIcon"
          onClick={this.addLikeHandler}
          color= {this.state.heartColor}
        />
        <FontAwesomeIcon
          icon={['fas', 'comment']}
          size="3x"
          className="postIcon"
        />
        <div className="likes">{this.state.likes} likes</div>
        <CommentSection comments={this.props.user.comments} timestamp={this.props.user.timestamp}/>
      </div>
    );
  }
}

Post.propTypes = {
  user: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
}

Post.defaultProps = {
  user: PropTypes.shape({
    thumbnailUrl: "",
    username: "anonymous",
    imageUrl: "",
    likes: 0,
    comments: []
  })
}

export default Post;