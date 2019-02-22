import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import Input from "../Input";




class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [...props.comments],
      user: "",
      text: ""
    };
    console.log(props);
  }

  addNewComment = (e) => {
    e.preventDefault();
    const comments = this.state.comments.slice();
    comments.push({ username: window.localStorage.getItem('username'), text: this.state.text});
    this.setState({ comments: comments, text: "" });
  };
  changeComment = e => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) => {
          return <Comment comment={comment} key={index} />;
        })}
        <Input
          add={this.addNewComment}
          change={this.changeComment}
          value={this.state.text}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentSection;
