import React, { Component } from 'react';
import propTypes from 'prop-types';
import NewComment from '../NewComment/NewComment';
import './CommentSection.css';

class CommentSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      commentText: '',
      container : 0
    }
  }
  componentDidMount() {
    this.setState({
      comments: this.props.comments
    })
  }

  render() {
    return (
      <section className='comments'>
          {this.state.comments.map((comment, index) => {
            return (
              <section className='comment' key={Math.random()} id={index}>
                <p>
                <strong>{comment.username}</strong> {comment.text}
                </p>
                <span className='close' onClick={this.props.close}>X</span>
            </section>
            );
          })}
          <NewComment onSubmit={this.props.onSubmit} value={this.props.commentText} onChange={this.props.onChange}/>
      </section>
    );
  }
}
CommentSection.propTypes = {
  comments: propTypes.array
}

export default CommentSection;
