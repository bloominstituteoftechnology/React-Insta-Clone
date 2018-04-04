import React from "react";

class Comments extends React.Component {
  render() {
    console.log("Comment Section Props", this.props);
    return (
      <div>
        {this.props.comments.map(comment => {
          return (
            <div>
              <p>{comment.username}</p>
              <p>{comment.text}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comments;
