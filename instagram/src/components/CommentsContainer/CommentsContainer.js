import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from './CommentSection';
import './CommentsContainer.css';


class CommentsContainer extends React.Component {
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
        )})

      </div>

    )

  }

}

CommentsContainer.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentsContainer