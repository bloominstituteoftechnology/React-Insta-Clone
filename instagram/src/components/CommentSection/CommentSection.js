import React from "react";

import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [...this.props.comments],
      inputText: ""
    };
  }



  changeHandler(event) {
    this.setState({
      comments: this.state.comments,
      inputText: event.target.value
    });
  }

  addNewComment(e) {
    e.preventDefault();
    let newComment = {
        username: "User",
        text: this.state.inputText
    }
    this.setState({
       
      comments: [...this.state.comments, newComment],
      inputText: ""
    });
    console.log(this.state.comments);
  }

  render() {
    return (
      <div className="commentSection">
        <div className="comments">
          {this.state.comments.map(comment => {
            return (
              <div>
                <span className="commentUsername">{comment.username}</span>
                <span className="commentText">{comment.text}</span>
              </div>
            );
          })}
        </div>
        <form
          onSubmit={e => {
            this.addNewComment(e);
          }}
          className="commentForm"
        >
          <input
            onChange={event => this.changeHandler(event)}
            type="text"
            placeholder="Add a comment..."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CommentSection;
