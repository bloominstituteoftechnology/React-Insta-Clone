import React, { Component } from "react";
import "./CommentSection.css";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import moment from "moment";
import PropTypes from "prop-types";

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.post.comments,
      comment: ""
    };
  }

  componentDidMount() {
    let id = this.props.id;
    if (localStorage.getItem(id)) {
      this.setState({ comments: JSON.parse(localStorage.getItem(id)) });
    } else {
      this.saveComments();
    }
  }

  componentWillUnmount() {
    this.saveComments();
  }

  handleChange = ev => {
    this.setState({
      comment: ev.target.value
    });
  };

  saveComments = () => {
    localStorage.setItem(this.props.id, JSON.stringify(this.state.comments));
  };

  addNewComment = e => {
    e.preventDefault();
    const newComment = { text: this.state.comment, username: "holdenSucks" };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: "" });
    setTimeout(() => {
      this.saveComments();
    }, 1000);
  };

  render() {
    console.log(localStorage);
    return (
      <div className="comments">
        {this.state.comments.map(data => (
          <Comment
            user={data.username}
            text={data.text}
            key={data.username + Math.random()}
          />
        ))}
        <p className="time">
          {moment(
            this.props.post.timestamp,
            "MMMM Do YYYY hh:mm:ss A"
          ).fromNow()}
        </p>
        <CommentForm
          comment={this.state.comment}
          add={this.addNewComment}
          handleChange={this.handleChange}
          time={this.props.post.timestamp}
        />
      </div>
    );
  }
}

export default CommentSection;

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};
