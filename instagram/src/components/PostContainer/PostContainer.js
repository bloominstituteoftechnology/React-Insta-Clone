import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import PropTypes from 'prop-types';
// import SearchBar from '../SearchBar/SearchBar.js';

//recieve props from app.js with comments then pass it to commentSection

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      likes: 0,
      likeStatus: false,
    }
  }

  toggleLike = (e) => {
    e.preventDefault();
    let newLikes = this.state.likes;
    if (this.state.likeStatus === false) {
      newLikes += 1;
      this.setState({
        likes: newLikes,
        likeStatus: true,
      })
    } else {
      newLikes -= 1;
      this.setState({
        likes: newLikes,
        likeStatus: false,
      })
    }
  }

  componentDidMount(){
    this.setState({
      likes: this.state.data.likes
    })
  }

  render() {
    return (
      <div
        className="post-container"
        data={this.state.data}>
        <div
          className="row">
          <img
            className="thumbnail" src={this.state.data.thumbnailUrl} alt="thumbnail"></img>
          <p className="username">{this.state.data.username}</p>
        </div>
        <img
          className="main-photo" src={this.state.data.imageUrl} alt="main"></img>
        <div className="row">
          <img
            onClick={this.toggleLike} className={(this.state.likeStatus) ? "heart hide" : "heart"}  src="https://www.freepngimg.com/download/instagram/1-2-instagram-heart-transparent.png" alt="heart"></img>
          <img
            onClick={this.toggleLike} className={(this.state.likeStatus) ? "dark-heart" : "dark-heart hide"} src={require("./heart.svg")} alt="dark-heart"></img>
          <img
            className="bubble"
            src="https://image.flaticon.com/icons/png/512/22/22302.png"
            alt="bubble"></img>
        </div>
        <p className="likes"><strong>{this.state.likes} likes</strong> </p>
        <CommentSection
          comments={this.state.data.comments}
          time={this.state.data.timestamp}/>
      </div>
    )
  }
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

export default PostContainer;
