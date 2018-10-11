import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';
import moment from 'moment';
import styled from 'styled-components';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      username: 'hardlyreal',
      commentText: '',
      id: this.props.id
    };
  }

  componentDidMount() {
    if (localStorage.getItem(!this.state.id)) {
      localStorage.setItem(this.state.id, JSON.stringify(this.state.comments));
    } else {
      let value = localStorage.getItem(this.state.id);
      value = JSON.parse(value);
      this.setState({ comments: value });
    }
  }

  addNewComment = (e, index) => {
    e.preventDefault();

    const comment = {
      username: this.state.username,
      text: this.state.commentText
    };

    const comments = [...this.state.comments, comment];

    this.setState(() => {
      return {
        comments: comments,
        commentText: ''
      };
    });
    localStorage.setItem(index, JSON.stringify(comments));
    // Need to figure out why state isn't updating this
    e.target.firstChild.value = '';
  };

  updateText = e => {
    this.setState({ commentText: e.target.value });
  };

  render() {
    const CommentSection = styled.div`
      padding: 1.5rem;
    `;

    const TimeStamp = styled.div`
      border-bottom: 1px solid #ededed;
      padding-bottom: 1.5rem;
      color: #8e8e8e;
      font-size: 1.2rem;
      text-transform: uppercase;
    `;

    return (
      <CommentSection>
        {this.state.comments.map((comment, i) => {
          return <Comment comment={comment} key={i} />;
        })}
        <TimeStamp>
          {moment()
            .startOf('day')
            .fromNow()}
        </TimeStamp>
        <CommentInput
          addNewComment={this.addNewComment}
          commentText={this.commentText}
          updateText={this.updateText}
          id={this.state.id}
        />
      </CommentSection>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentSection;
