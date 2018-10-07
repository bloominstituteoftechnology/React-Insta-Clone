import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from './CommentSection';
import AddNewComment from './AddNewComment'
import './CommentsContainer.css';


export default class CommentsContainer extends React.Component {
  constructor (props) {
      super(props);
      this.state = {comments: this.props.comments}

  }

  render () {

    return (
      <div className = 'comments-container'>
        {this.state.comments.map (el => {
          return <CommentSection username = {el.username} text = {el.text}/>
        }
        )}

        <AddNewComment/>

      </div>

    )

  }

}

CommentsContainer.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

