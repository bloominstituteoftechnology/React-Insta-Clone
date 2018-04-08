import React, { Component } from 'react';
import FaHeartO from '../../../node_modules/react-icons/lib/fa/heart-o';
import FaEllipsisH from '../../../node_modules/react-icons/lib/fa/ellipsis-h';
import FaBookmarkO from '../../../node_modules/react-icons/lib/fa/bookmark-o';
import FaCommentO from '../../../node_modules/react-icons/lib/fa/comment-o';

// like/comment . likes . comments . options timeStamp . addComment
// this.props.comments returns individual post comments as array
// this.props.likes returns the number of likes on a post
export class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      individualPost: this.props.userPost
    };
  }

  interactiveIcons = () => {
    return (
      <div className="Comments__icons">
        <FaHeartO className="Icons" />
        <FaCommentO className="Icons" />
        <FaBookmarkO className="Icons" />
      </div>
    )
  }

  displayLikes = () => {
    return <div className="Comments__likes">{`${this.state.individualPost.likes} likes`}</div>
  }

  listComments = () => {
    return (
      <div className="Comments__comments">
        {this.state.individualPost.comments.map( (comment, index) => (
          <div key={comment.username + index} className="Comments__comments--full">
            <div className="Comments__comments--user">{comment.username}</div>
            <p className="Comments__comments--text">{comment.text}</p>
          </div>
        ))}
      </div>
    )
  }

  basicTimeStamp = () => {
    return <div className="TimeStamp">{this.state.individualPost.timestamp}</div>
  }

  addComment = () => {
    return (
      <div className="Comment__addComment">
        <input
          type="text"
          placeholder="Add a comment..."
          name="addComment"
          className="Comment__addComment--input"
        />
        <button className="Comment__addComment--submit"><FaEllipsisH /></button>
      </div>
    )
  }

  render() {
    return (
      <div className="Comments">
        {this.interactiveIcons()}
        {this.displayLikes()}
        {this.listComments()}
        {this.basicTimeStamp()}
        {this.addComment()}
      </div>
    )
  }
}
