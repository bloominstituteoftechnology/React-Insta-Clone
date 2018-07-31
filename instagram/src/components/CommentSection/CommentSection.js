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
          <div className = 'col'>
            <div className="row">


          </div>
          <div className = 'commentsection'>
            {this.state.comments.map((a, i) => <Comment key={i.username} comment={a} />)}
            <form >
              <input className = " formholder" type="text" placeholder="Add comment... " />
            </form>
          </div>
        </div>
        );
      }
    }



    export default CommentSection;
