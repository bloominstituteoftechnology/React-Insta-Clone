import React, { Component } from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import Comment from './Comment';
import  like from "../../assets/likecons.png";



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
              <img alt="like comment icons"  className="likecons"  src={like} />
          </div>
          <div className = 'commentsection'>
            {this.state.comments.map((a, i) => <Comment key={i} comment={a} />)}
            <form>
              <input type="text" placeholder="Add comment... " />
            </form>
          </div>
        </div>
        );
      }
    }

    CommentSection.propTypes = {
      comments: PropTypes.arrayOf(
        PropTypes.shape({
           text: PropTypes.string,
          username: PropTypes.string,
          likes: PropTypes.number })
      )
    };

    export default CommentSection;
