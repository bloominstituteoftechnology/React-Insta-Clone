import React from "react";
import Likes from "./Likes";
import PostContainer from "./PostContainer";
import PropTypes from "prop-types";
import moment from 'moment';
import PostHeader from './PostHeader'
import CommentSection from '../CommentSection/CommentSection'


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }
  addLikes = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };
  render() {
    return (
      <div>
        <div className="post-wrap">
          

          <div className="main-img">
            <img src={this.props.post.imageUrl} alt="main post image" />
          </div>

          <CommentSection comments={this.props.post.comments} />
          <p className="date">
            {moment(this.props.post.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}
          </p>

          <form className="comm-form">
            <input
              className="comm-input"
              type="text"
              name="titlevalue"
              placeholder="Add a comment..."
            />
          </form>

         
        </div>
      </div>
    );
  }
}


Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailURL: PropTypes.string,
        imageUrl: PropTypes.string
    })
  };

  export default Post;