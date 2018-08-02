import React from "react";
import moment from "moment";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import styled from 'styled-components';

const Timestamp =  styled.p`
  color: gray;
  font-size: 10px;
  font-family: Sans-Serif;
`;

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: props.timestamp,
      comments: props.comments,
      comment: ""
    };
  }

  inputChangeHandler = e => {
    this.setState({ comment: e.target.value });
  };

  addNewComment = e => {
    e.preventDefault();
    const comments = this.state.comments.slice();
    comments.push({ text: this.state.comment, username: "anon" });
    console.log(this.state.timestamp);
    this.setState({ comments, comment: "" });
    //what you define here is what is replaced in state
  }

 
  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} newComment={c} />)}
        <Timestamp>{moment(this.state.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow().toUpperCase()}</Timestamp>
        <CommentInput 
          add={this.addNewComment}
          comment={this.state.comment}
          change={this.inputChangeHandler}
        />
      </div>
    );
  }
}

export default CommentSection;



