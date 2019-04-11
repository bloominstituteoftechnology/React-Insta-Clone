import React, { Component } from 'react';
import propTypes from 'prop-types';
import NewComment from '../NewComment/NewComment';
import './CommentSection.css';
import styled from 'styled-components';

const Comment = styled.section`
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    margin: 5px 0;
`;

class CommentSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentText: '',
      container : 0
    }
  }

  render() {
    return (
      <section className='comments'>
          {this.props.comments.map((comment, index) => {
            return (
              <Comment key={Math.random()} id={index}>
                <p>
                <strong>{comment.username}</strong> {comment.text}
                </p>
                <span className='close' onClick={this.props.close}>X</span>
            </Comment>
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
