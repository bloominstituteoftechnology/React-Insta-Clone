import React, { Component } from "react";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import Comments from "./Comments";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addLike, addComment, getData } from "../../actions";

class PostContainer extends Component {
  state = {
    commentField: ""
  };

  onLikeClick = username => {
    this.props.onLike(username);
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

  render() {
    const { Insta } = this.props;

    return (
      <>
        {Insta.data.map(post => (
          <div key={post.username} className="post-container">
            <PostHeader
              thumbnailUrl={post.thumbnailUrl}
              username={post.username}
            />
            <PostImage imageUrl={post.imageUrl} />
            <Comments
              comments={post.comments}
              onLikeClick={this.onLikeClick}
              likes={post.likes}
              username={post.username}
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
  Insta: state.Insta
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
