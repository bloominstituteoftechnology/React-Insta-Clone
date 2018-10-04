import React, { Component } from 'react';
import propTypes from 'prop-types';
import NewComment from '../NewComment/NewComment';
import './CommentSection.css';

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
      commentText: '',
      container : 0
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
  close = (e) => {
    console.log(e.target.parentNode)
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
              <section className='comment' key={Math.random()}
                id={Math.random()}>
                <p>
                <strong>{comment.username}</strong> {comment.text}
                </p>
                <span className='close' onClick={this.close}>X</span>
            </section>
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
