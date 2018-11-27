import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';
import Comments from './Comments';


class CommentContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments: props.comments
    }
  }
  render(){
    return(
      <div>
        {this.state.comments.map((commentP) =>
          <Comments
            key={commentP.timestamp}
            comment={commentP}
          />)}
          <CommentInput />
      </div>
    );
  }
}

CommentContainer.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  )
};

export default CommentContainer;
