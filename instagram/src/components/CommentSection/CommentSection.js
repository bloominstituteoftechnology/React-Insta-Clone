import React, { Component } from "react";
import dummyData from './dummy-data';
import CommentSection from './CommentSection';  


class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments     
    }; 
  }

  componentDidMount() {
      this.setState({comments: dummyData});
  }

  render() {
    return (
      <div>
        {props.comments.map(comment => {
        return (
        <div key={comment.username + comment.text}>
        {comment.username} {comment.text}
        </div>
          );
        })}
      </div>
    );
  }
}

export default CommentSection; 