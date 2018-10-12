import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import AddComment from "./AddComment";
// import "./CommentSection.css";
import { CommentsContainer, Timestamp } from "../Styles/Styles";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.user.comments,
      timestamp: props.user.timestamp,
      newComment: ""
    };
  }

  //on mounting, checks local storage for previously stored comments. if it finds them,
  //set them on state. otherwise updates comments to current state
  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    } else {
      this.setComments();
    }
  }

  //saves currently displayed comments on unmount
  componentWillUnmount() {
    this.setComments();
  }

  //the function for saving comments to storage
  setComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };

  addNewComment = (event, index) => {
    //function needs to add the comment that is on the event object to the post at the index number
    event.preventDefault();

    if (this.state.newComment !== "") {
      let newCommentList = [
        ...this.state.comments,
        {
          id: index + 1,
          username: localStorage.getItem("username"),
          text: this.state.newComment
        }
      ];

      this.setState({
        comments: newCommentList,
        newComment: ""
      });
      //after delay, updates comment list to storage
      setTimeout(() => {
        this.setComments();
      }, 500);
    }
  };

  changeHandler = (key, value) => {
    //"key" here is NewComment, it and the value are pulled from the onSubmit in Comment.js
    this.setState({
      [key]: value
    });
  };

  render() {
    return (
      <CommentsContainer>
        {this.state.comments.map(comment => {
          return <Comment key={comment.id} comment={comment} />;
        })}
        <Timestamp>{this.state.timestamp}</Timestamp>
        <AddComment
          addNewComment={this.addNewComment}
          changeHandler={this.changeHandler}
          newComment={this.state.newComment}
          comments={this.state.comments}
        />
      </CommentsContainer>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentSection;
