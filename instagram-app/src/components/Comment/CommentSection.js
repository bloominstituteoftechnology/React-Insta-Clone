import React from 'react';
import './comment.css';

class CommentSection extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value: '',
      comment: props.comment.text
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  addComment = event => {
    event.preventDefault();

    const newComment = {
      value: this.state.value
    };

    this.setState({
      comment: [...this.state.comment, newComment]
    });
  };

  render() {
    return (
      <div className='comment'>
        <p className='likes'>{this.props.likes}&nbsp;likes</p>

        {this.props.comment.map(comment => {
          return (
            <div className='user-comment'>
              <p className='user'>{comment.username}</p>
              <p>{comment.text}</p>
            </div>
          );
        })}

        <form>
          <input type='text' placeholder='Add a comment' onChange={this.handleChange} value={this.state.value} />
        </form>
      </div>
    );
  }
}

export default CommentSection;
