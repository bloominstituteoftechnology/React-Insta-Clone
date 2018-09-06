import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentBar from './CommentBar';
import './darkheart.jpg';
import styled from 'styled-components';
// this component contains all comments in a given post

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: "",
      likes: props.likes,
      hasLiked: false,
    };
  }

  addNewComment = (event) => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {text: this.state.newComment, username: localStorage.username}
      ],
      newComment: "",

    });
    event.target.reset();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  increaseLikes = (event) => {
    event.preventDefault();
    if (this.state.hasLiked === false) {
    this.setState({ likes: this.state.likes + 1 });
    this.setState({ hasLiked: true });
  }
  }


  render() {
    return (
      <CommentField>
      {this.state.likes}
      <HeartImage onClick={this.increaseLikes} className="heart" alt="Heart Icon" src="https://clip2art.com/images/love-clipart-2.png" />
      {this.state.comments.map((comment, index) => (
        <Comment
          key={index}
          username={comment.username}
          text={comment.text}
        />

      )
    )}
    <CommentBar
      addNewComment={this.addNewComment}
      handleChange={this.handleChange}

      />
    </CommentField>
    )
  }
}
const CommentField = styled.div`
background-color: beige;
padding: 1rem
`;
const HeartImage = styled.img`
  display: flex;
  align-self: center;
  margin: auto;
  width: 2rem
  `;
CommentSection.propTypes = {
  commentData: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
  })),
}

export default CommentSection;
