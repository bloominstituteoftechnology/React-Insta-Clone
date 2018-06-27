import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          comments: props.comments,
          comment: '',
          likes: 0
      };
    }
ComponentDidMount() {}
    
}
export default CommentSection;