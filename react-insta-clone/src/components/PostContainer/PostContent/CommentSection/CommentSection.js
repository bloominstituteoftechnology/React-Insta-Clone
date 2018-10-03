import React, { Component } from 'react';
import propTypes from 'prop-types';
import NewComment from '../NewComment/NewComment';

class CommentSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      username: 'bigben223',
      newComment: {
        'username': '',
        'text': ''
      },
      commentText: ''
    }
  }
  componentDidMount() {
    this.setState({
      comments: this.props.comments
    })


  }
  addNewComment = (e) => {
    e.preventDefault();
    const text = e.target.children[0].value;
    const comments = this.state.comments;
    const username = this.state.username;
    comments.push({username,text})

    this.setState({
      comments: comments,
      commentText: ''
    })
  }
  onChange = (e) => {
    this.setState({
      commentText : e.target.value
    })
  }
  render() {
    return (
      <section className='comments' id={Math.random()}>
          {this.state.comments.map((comment, index) => {
            return (
              <p className='comment' key={Math.random()}>
                <strong>{comment.username}</strong> {comment.text}
              </p>
            );
          })}
          <NewComment onSubmit={this.addNewComment} value={this.state.commentText} onChange={this.onChange}/>
      </section>
    );
  }
}
CommentSection.propTypes = {
  comments: propTypes.array
}

export default CommentSection;
