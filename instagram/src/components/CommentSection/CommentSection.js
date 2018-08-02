import React from "react";
import PropTypes from 'prop-types'
import deleteImg from "../../assets/delete.png";
import "./CommentSection.css";

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
      <div className="comment" onMouseEnter={this.showDelete} onMouseLeave={this.hideDelete}>
        <span><span className="comment-user">{this.props.comment.username}</span>
        <span>{this.props.comment.text}</span>
        </span>
        {this.state.deleteShowing && <img className="deleteImg" src={deleteImg} onClick={this.props.onClick} alt="delete"/>}
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string),
};

export default CommentSection;
