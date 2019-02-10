import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import styled from 'styled-components';

class Comment extends Component {

  render() {
    const {username, text} = this.props.comment;
    return (
      <CommentContainer>
        <UserName>{username}:</UserName>
        <PostText>{text}</PostText>
      </CommentContainer>
    )
  }
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })
}

export default Comment;

const CommentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 0 20px;
  &:first-of-type {
    margin: 10px 20px 0;
  }
`;

const UserName = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
`;

const PostText = styled.p`
  font-size: 1rem;
  text-align: left;
  margin-left: 5px;
`;