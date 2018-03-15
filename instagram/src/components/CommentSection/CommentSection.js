import React, {Component } from 'react';
import AddComment from'./../AddComment/AddComment.js';

class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  };

  componentDidMount() {
    this.setState({comments: this.props.comments});
  };

  addNewComment = (newCommentText) => {
    const tempComments = this.state.comments;
    tempComments.push({
      text: newCommentText,
      username: 'Anonymous User'
    });
    this.setState({comments: tempComments});
  };

  render() {
    return (
      <div className={'container-fluid mb-5'}>
          {this.state.comments.map(comment => {
            return (
              <div className={'row'}>
                  <div className={'col-3 username commentUserName'}> {comment.username}</div>
                  <div className={'col-9 d-flex align-items-center commentBox'}><p>{comment.text}</p></div>
              </div>
            )
          })}
          <AddComment addNewComment={this.addNewComment}/>
      </div>
    );
  };
}

export default CommentSection;