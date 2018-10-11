import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from './CommentSection';
import AddNewComment from './AddNewComment'
import './CommentsContainer.css';


export default class CommentsContainer extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
        comments: this.props.comments,
        inputText: ''
      }
  }

  addComment = event => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          username: 'WebDude2834',
          text: this.state.commentText
        }
      ],

      commentText: ''

    })
  };

  handleInput = event => {
    this.setState({commentText: event.target.value});
  };

  render () {

    return (
      <div className = 'comments-container'>
        {this.state.comments.map (el => {
          return <CommentSection username = {el.username} text = {el.text}/>
        }
        )}

        <AddNewComment
         addComment = {this.addComment}
         handleInput = {this.handleInput}
         commentText = {this.state.commentText}

        />

      </div>

    )

  }

}

CommentsContainer.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

