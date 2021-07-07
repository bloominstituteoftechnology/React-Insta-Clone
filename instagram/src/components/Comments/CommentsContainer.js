import React from 'react';
import AddComment from './AddComment';
import Comment from './Comment';
import PropTypes from 'prop-types';
import { Comments } from './../Styled/styled';
import './comments.css';

class CommentsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      inputValue: ''
    };
    console.log(this.props);
  }

  addNewComment = event => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          username: 'jander9009',
          text: this.state.inputValue
        }
      ],
      inputValue: ''
    });
  };

  handleInput = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    if (!this.state.comments) {
      return <div>Loading Data...</div>;
    }
    return (
      <Comments>
        {this.state.comments.map(x => {
          return <Comment username={x.username} text={x.text} />;
        })}
        <AddComment
          addComment={this.addNewComment}
          handleInput={this.handleInput}
          inputValue={this.state.inputValue}
        />
      </Comments>
    );
  }
}

CommentsContainer.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default CommentsContainer;
