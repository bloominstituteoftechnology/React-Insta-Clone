import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';


class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.data.likes
    }
  }
  plusLikes = () => {
    this.setState(prevState => {
      return {likes: prevState.likes + 1}
    })
  }
  render() {
    return (
      <div className="post">
        <div className="postTitle">
          <img src={this.props.data.thumbnailUrl} alt=""/>
          <p>{this.props.data.username}</p>
        </div>
        <img className="postImage" src={this.props.data.imageUrl} alt=""/>
        <div className="postIcons">
          <i className="far fa-heart" onClick={this.plusLikes}></i>
          <i className="far fa-comment"></i>
        </div>
        <p className="likes">{this.state.likes} likes</p>
        <CommentSection comments={this.props.data.comments} />
      </div>
    )
  }
}

PostContainer.propTypes = {
  data: PropTypes.shape({
    thumbnailUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
}

export default PostContainer;