import React, { Component } from "react";
import PropTypes from "prop-types";
import { Glyphicon } from "react-bootstrap";
import CommentsSecion from "../CommentSection/CommentSection";
import "./PostContainer.css";
class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      thumbnailUrl: "",
      imageUrl: "",
      likes: 0,
      timestamp: "",
      comments: []
    };
  }

  componentWillMount() {
    this.setState(this.props.post);
  }

  render() {
    return (
      <div className="Post">
        <div className="Post__header">
          <img className="Post__user-avatar" src={this.state.thumbnailUrl} />
          {this.state.username}
        </div>
        <div className="Post__image">
          <img className="Post__image" src={this.state.imageUrl} />
        </div>
        <CommentsSecion
          likes={this.state.likes}
          comments={this.state.comments}
        />
      </div>
    );
  }
}

PostContainer.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  timestamp: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;
