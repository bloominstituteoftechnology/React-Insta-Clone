import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import { PostBody, PostName, PostThumbnail, PostUserName, PostImg, PostIcon, PostLikes } from '../styles/PostContainerStyles';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      heartColor: "black",
      alreadyHeart: false
    }
  }

  componentDidMount() {
    if (localStorage.hasOwnProperty(this.props.user.timestamp+1)) {
      // get the key's value from localStorage
      let info = localStorage.getItem(this.props.user.timestamp+1);

      // parse the localStorage string and setState
      try {
        info = JSON.parse(info);
        const likes = info.likes;
        const heartColor = info.heartColor;
        const alreadyHeart = info.alreadyHeart;
        this.setState({likes: likes, heartColor: heartColor, alreadyHeart: alreadyHeart});
      } catch (e) {
        this.setState({likes: this.props.user.likes, heartColor: "black", alreadyHeart: false});
      }
    } else this.setState({likes: this.props.user.likes, heartColor: "black", alreadyHeart: false});
  }

  addLikeHandler = () => {
    let likes = this.state.likes;
    let heartColor = "black";
    let alreadyHeart = false;
    if(!this.state.alreadyHeart) {
      likes ++;
      heartColor = "red";
      alreadyHeart = true;
    }
    else {
      likes --;
    }
    const info = {
      likes: likes,
      heartColor: heartColor,
      alreadyHeart: alreadyHeart
    }
    localStorage.setItem(this.props.user.timestamp+1, JSON.stringify(info));
    this.setState({likes: likes, heartColor: heartColor, alreadyHeart: alreadyHeart});
  }

  render() {
    return (
      <PostBody>
        <PostName>
          <PostThumbnail src={this.props.user.thumbnailUrl} alt="Thumbnail" />
          <PostUserName>{this.props.user.username}</PostUserName>
        </PostName>
        <PostImg src={this.props.user.imageUrl} alt="post" />
        <PostIcon>
          <FontAwesomeIcon
            icon={['fas', 'heart']}
            size="3x"
            className="postIcon"
            onClick={this.addLikeHandler}
            color= {this.state.heartColor}
          />
        </PostIcon>
        <PostIcon>
          <FontAwesomeIcon
            icon={['fas', 'comment']}
            size="3x"
            className="postIcon"
          />
        </PostIcon>
        <PostLikes>{this.state.likes} likes</PostLikes>
        <CommentSection comments={this.props.user.comments} timestamp={this.props.user.timestamp}/>
      </PostBody>
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