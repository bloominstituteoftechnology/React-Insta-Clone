import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      text: ''
    };
  }

  componentDidMount() {
    const json = localStorage.getItem('comments');
    const comments = JSON.parse(json);

    if (comments) {
      this.setState(() => ({
        comments
      }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments.length !== this.state.comments.length) {
      const json = JSON.stringify(this.state.comments);
      localStorage.setItem('comments', json);
    }
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    const newComment = {
      id: Date.now(),
      text: this.state.text,
      username: 'philzcoffee'
    };

    this.setState({
      comments: [...this.state.comments, newComment],
      text: ''
    });
  };

  render() {
    return (
      <div>
        <div className="comments">
          {this.state.comments.map(comment => {
            return (
              <Comment
                key={comment.id}
                username={comment.username}
                text={comment.text}
              />
            );
          })}
          <p className="timeline">{this.props.date}</p>
        </div>
        <CommentInput
          onChange={this.onInputChange}
          onSubmit={this.onFormSubmit}
          text={this.state.text}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      username: PropTypes.string
    })
  )
};

export default CommentSection;
