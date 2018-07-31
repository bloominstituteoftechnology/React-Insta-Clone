import React, { Component } from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import Comment from './Comment';



    class CommentSection extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          comments: props.comments
        };
      }
      render() {
        return (
          <div className = 'commentsection'>
            {this.state.comments.map((a, i) => <Comment key={i} comment={a} />)}
            <form>
              <input type="text" placeholder="Add comment... " />
            </form>
          </div>
        );
      }
    }

    CommentSection.propTypes = {
      comments: PropTypes.arrayOf(
        PropTypes.shape({
           text: PropTypes.string, 
          username: PropTypes.string })
      )
    };

    export default CommentSection;
