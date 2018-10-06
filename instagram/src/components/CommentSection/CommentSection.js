import React, { Component } from "react";
import Comment from "./Comment";
import moment from 'moment'



class CommentSection extends Component {
  render() {
    const timestamp = moment(this.props.timestamp, 'MMMM Do YYYY, h:mm:ss a', true).startOf('hour').fromNow();
    return (
      <div className="comment-section">
        <h3 className="likes">{this.props.likes} likes</h3>
        {this.props.comments.map(x => (
          <Comment username={x.username} text={x.text} />
        ))}
        <p className='timestamp'>{timestamp}</p>
        <input type="text" placeholder="Add a comment..." className="add-comment"/>
      </div>
    );
  }
}

export default CommentSection;
