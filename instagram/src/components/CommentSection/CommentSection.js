import React, { Component } from 'react';
import './CommentSection.css';

class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      // comments: [];
    }
  }

  componentDidMount() {
    this.setState({comments: this.props.comments})
  }

  render() {
    console.log("render commentsection",this.state.comments);
    return (
      <div className="CommentContainer">
        {this.props.comments.map(comment => {
        return (
          <div key={comment}>
            {comment.username}
            {comment.text}
          </div>);
        }
      )}
      </div>
    );
  }
};

export default CommentSection;