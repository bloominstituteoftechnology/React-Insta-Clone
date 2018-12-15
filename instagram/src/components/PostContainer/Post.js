import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

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
      // this.setState({likes: likes, heartColor: "red", alreadyHeart: true});
    }
    else {
      likes --;
      // this.setState({likes: likes, heartColor: "black", alreadyHeart: false});
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