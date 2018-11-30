import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Comments.css';
import styled from "styled-components";

const Text = styled.div
` text-align: left;
  padding: 0.2rem;
  margin-left: 0.7rem;

    span{
      font-weight: 700;
      font-size: 0.9rem;
    }

    .comment{
      font-weight: 600;
      font-size: 0.7rem;
    }`;

const Comments = props => {
  return(
    <Text>
      <span>{props.comment.username}{'  '}</span>
      <span className='comment'>{props.comment.text}</span>
    </Text>
  )
}

Comments.propTypes = {
  commentP: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default Comments;
