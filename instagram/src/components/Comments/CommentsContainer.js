import React from 'react';
import AddComment from './AddComment';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './comments.css';

class CommentsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: this.props.comments };
    console.log(this.props);
  }

  render() {
    if (!this.state.comments) {
      return <div>Loading Data...</div>;
    }
    return (
      <div className="comments">
        {this.state.comments.map(x => {
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
