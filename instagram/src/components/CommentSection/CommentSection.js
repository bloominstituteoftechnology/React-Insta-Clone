import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

const DisplayTime = styled.div`
  display: flex;
  padding-left: 5px;
`;
class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      // if still in memory
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId)) // update with memory vals
      });
    } else {
      this.setComments(); // if not in memory, set comments to what is in state in local memory
    }
  }

  componenetWillUnmount() {
    this.setComments();
  }

  // set local storage to what the value is in state
  setComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };

  commentHandler = e => {
    this.setState({ comment: e.target.value }); // update state comment field
  };

  addNewComment = e => {
    e.preventDefault();
    if (this.state.comment.length > 0) {
      const newComment = { text: this.state.comment, username: "bmadrid" }; // make object to add
      const comments = this.state.comments.slice(); // make copy of state object to update
      comments.push(newComment); // add newComment object to the state array
      this.setState({ comments: comments, comment: "" }); // update State and blank out the state comment field
      this.setComments(); // save objects offline
    }
  };

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
        <DisplayTime>{this.props.dTime}</DisplayTime>
        <CommentInput
          comment={this.state.comment}
          submitComment={this.addNewComment}
          changeComment={this.commentHandler}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  imageUrl: PropTypes.string,
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  ),
  dTime: PropTypes.string
};

export default CommentSection;
