import React from "react";

class Comments extends React.Component {
  render() {
    console.log("Comment Section Props", this.props);
    return (
      <div>
        {this.props.comments.map(comment => {
          return (
            <div className="comments">
              <p className="comments_username">{comment.username}</p>
              <p className="comments_text">{comment.text}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comments;
