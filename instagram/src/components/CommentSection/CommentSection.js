import React from 'react';
import uuid from 'uuid/v1';
import PropTypes from 'prop-types';
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      focused: false,
    };
  }

  onCommentChange = event => {
    this.setState({
      comment: event.target.value,
    });
  };

  onCommentFocus = () => {
    this.setState({ focused: true });
  };

  onCommentBlur = event => {
    if (!event.target.value) {
      this.setState({
        focused: false,
      });
    }
  };

  onCommentSubmit = event => {
    console.log(this.state.comment);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="row icons">
          <div>
            <i className="col-sm-1 far fa-heart" />
          </div>
          <div>
            <i className="col-sm-1 far fa-comment fa-flip-horizontal" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">{this.props.post.likes} likes</div>
        </div>
        <div>
          {this.props.post.comments.map(c => (
            <div key={uuid()} className="row">
              <p className="comment username">{c.username}</p> &nbsp;
              <p className="comment text">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="newComment">
          <form onSubmit={this.onCommentSubmit}>
            <input
              className="commentBox"
              type="text"
              name="comment"
              onFocus={this.onCommentFocus}
              onBlur={this.onCommentBlur}
              onChange={this.onCommentChange}
              value={
                !this.state.focused ? 'Add a comment...' : this.state.comment
              }
            />
          </form>
        </div>
      </div>
    );
  }
}

CommentSection.propTypes = {
  commnet: PropTypes.shape({
    username: PropTypes.string.isRequired,
    comment: PropTypes.string,
  }),
};

export default CommentSection;
