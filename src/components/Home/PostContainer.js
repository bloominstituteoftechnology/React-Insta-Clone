import React, { Component } from "react";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import Comments from "./Comments";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addLike, addComment, getData } from "../../actions";
import axios from "axios";
class PostContainer extends Component {
  state = {
    commentField: "",
    image: ""
  };

  componentDidMount = () => {
    this.props.onGetData();
  };

  onLikeClick = id => {
    this.props.onLike(id);
  };

  onGettingData = () => {
    this.props.onGetData();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCommentSubmit = (e, username, user, text) => {
    e.preventDefault();
    this.props.onComment(username, user, text);
    this.setState({ commentField: "" });
  };

  onUploadSubmit = e => {
    e.preventDefault();
    axios
      .post("https://comptagroup.com/api/instagram/posts", {
        uasername: window.localStorage.username,
        image: this.state.inage
      })
      .then(res => {
        console.log(res.data);
      });
  };

  render() {
    const { Insta, data } = this.props;
    console.log(this.props.data);
    return (
      <>
        <form
          className="upload"
          action="https://comptagroup.com/api/instagram/posts"
          method="post"
          encType="multipart/form-data"
          target="_self"
        >
          <div className="upload-btn-wrapper">
            <input
              type="hidden"
              name="username"
              value={window.localStorage.username}
            />
            <input type="file" name="image" />
            <button className="btn">Upload New Post</button>
          </div>
          <div className="submit-btn">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>

        {data.map(post => (
          <div key={post._id} className="post-container">
            <PostHeader
              thumbnailUrl={post.thumbnailUrl}
              username={post.username}
            />
            <PostImage imageUrl={post.imageUrl} />
            <Comments
              comments={post.comments}
              onLikeClick={this.onLikeClick}
              likes={post.likes}
              id={post._id}
              Insta={Insta}
              onComment={this.onCommentSubmit}
              onGettingData={this.onGettingData}
              handleChange={this.handleChange}
              commentField={this.state.commentField}
            />
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = state => ({
  Insta: state.Insta,
  data: state.Insta.data
  //more state
});

const mapActionsToProps = {
  onLike: addLike,
  onComment: addComment,
  onGetData: getData
  // more methods
};

PostContainer.propTypes = {
  Insta: PropTypes.shape({
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
      })
    ),
    username: PropTypes.string,
    timestamp: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    likes: PropTypes.number,
    imageUrl: PropTypes.string
  })
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PostContainer);
