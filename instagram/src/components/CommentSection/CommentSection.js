import React, { Component } from "react";
import Comment from "./Comment";
import moment from "moment";

class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleInput = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newObj = {
      username: "7.liii",
      text: this.state.input
    };
    if (this.state.input !== "") {
      this.props.comments.push(newObj);
    }
  };

  render() {
    const timestamp = moment(
      this.props.timestamp,
      "MMMM Do YYYY, h:mm:ss a",
      true
    )
      .startOf("hour")
      .fromNow();
    return (
      <div className="comment-section">
        <h3 className="likes">{this.props.likes} likes</h3>
        {this.props.comments.map(x => (
          <Comment username={x.username} text={x.text} />
        ))}
        <p className="timestamp">{timestamp}</p>
        <form>
          <input
            type="text"
            value={this.state.input}
            placeholder="Add a comment..."
            className="add-comment"
            onChange={this.handleInput}
            onSubmit={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default CommentSection;
