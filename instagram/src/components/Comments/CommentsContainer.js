import React from 'react';
import AddComment from './AddComment';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './comments.css';

class CommentsContainer extends React.Component {
  render() {
    return (
      <div className="comments">
        {this.props.comments.map(x => {
          return <Comment username={x.username} text={x.text} />;
        })}
        <AddComment />
      </div>
    );
  }
}

CommentsContainer.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentsContainer;
