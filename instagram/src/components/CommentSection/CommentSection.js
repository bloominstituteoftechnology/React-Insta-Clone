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
            <div>
              <p key={index}><strong>{user.username} </strong>{user.text}</p>
            </div>
            )
        })}
        <input
                type="text"
                placeholder="Add Comment"
                className="input-comment"
              />
      </div>

    )
  }

}

export default CommentSection;