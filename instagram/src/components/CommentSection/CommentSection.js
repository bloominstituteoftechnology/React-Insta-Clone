import React, { Component } from "react";
import Comment from "./Comment";
import moment from "moment";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
library.add(faHeart, faComment);

class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  componentDidMount () {
    this.setState({likes: this.props.likes})
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
      this.setState({
        input: ""
      });
    }
  };


  handleLike = () => {
    this.setState({likes: this.props.likes +1 })
  }

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
        <div className="icon-container">
          <FontAwesomeIcon icon="heart" className="icon" onClick={this.handleLike}/>
          <FontAwesomeIcon icon="comment" className="icon" />
        </div>
        <h3 className="likes">{this.state.likes} likes</h3>
        {this.props.comments.map(x => (
          <Comment username={x.username} text={x.text} />
        ))}
        <p className="timestamp">{timestamp}</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.input}
            placeholder="Add a comment..."
            className="add-comment"
            onChange={this.handleInput.bind(this)}
          />
        </form>
      </div>
    );
  }
}

export default CommentSection;
