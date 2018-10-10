import React, { Component } from "react";

class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment: "",
      comments: props.comments
    };
  }

  render() {
    console.log(this.state.comments);
    return (
      <div>
        {this.state.comments.map(data => {
          return (
            <div className="comment-container">
              <h3>{data.username}</h3>
              <p>{data.text}</p>
              <form>
                <input type="text" placeholder="add new comment" />
              </form>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CommentsContainer;
