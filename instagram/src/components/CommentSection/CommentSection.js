import React from 'react';
import './CommentSection.css';
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
                  className="Input-Comment"
                />
        </div>
  
      )
    }
  
  }

export default CommentSection;