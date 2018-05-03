import React from "react";
import "./commentSection.css"

class CommentSection extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.comments.map(function(user, index) {
          return (
            <div key={index}>
              <p ><strong>{user.username} </strong>{user.text}</p>
            </div>
            )
        })}
      </div>
    )
  }
}

export default CommentSection;