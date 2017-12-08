import React, { Component } from "react";
import { FormControl, FormGroup, Form } from "react-bootstrap";
import moment from "moment";

class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      newComment: ""
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments
    });
  }

  addComment = event => {
    event.preventDefault();
    const commentList = this.state.comments;
    const commentToAdd = {
      username: "Ting",
      text: this.state.newComment,
      timestamp: moment().fromNow()
    };
    commentList.push(commentToAdd);
    this.setState({ comments: commentList, newComment: "" });
  };

  handleInput = event => {
    this.setState({ newComment: event.target.value });
  };

  render() {
    return (
      <div style={{ padding: "1rem" }}>
        {this.state.comments
          ? this.state.comments.map((comment, i) => (
              <div key={i} style={{ textAlign: "left" }}>
                <strong>{comment.username}</strong>: <span>{comment.text}</span>
                <p>{comment.timestamp}</p>
              </div>
            ))
          : null}
        <Form horizontal onSubmit={this.addComment}>
          <FormGroup>
            <FormControl type="text" placeholder="Add a comment..." onChange={this.handleInput} value={this.state.newComment}/>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default CommentSection;
