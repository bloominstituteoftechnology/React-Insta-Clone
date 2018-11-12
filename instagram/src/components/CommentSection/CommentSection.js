import React from "react";
import PropTypes from 'prop-types';
import deleteImg from "../../assets/delete.png";
import {Comment, User, DeleteButton} from "./comment-styles"

class CommentSection extends React.Component {
  state = {
    deleteShowing: false,
  };

  showDelete = () => {
    if (this.props.comment.username === this.props.username) {
      this.setState({ deleteShowing: true });
    }  
  };

  hideDelete = () => {
    this.setState({ deleteShowing: false })
  }
  render() {
    return (
      <Comment onMouseEnter={this.showDelete} onMouseLeave={this.hideDelete}>
        <span><User>{this.props.comment.username}</User>
        <span>{this.props.comment.text}</span>
        </span>
        {this.state.deleteShowing && <DeleteButton src={deleteImg} onClick={this.props.onClick} alt="delete"/>}
      </Comment>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string),
};

export default CommentSection;
