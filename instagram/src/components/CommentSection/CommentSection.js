import React from "react";
import PropTypes from 'prop-types'
import deleteImg from "../../assets/delete.png";
import "./CommentSection.css";

class CommentSection extends React.Component {
  state = {
    deleteShowing: false,
  };

  showDelete = () => {
    this.setState({ deleteShowing: true });
  };

  hideDelete = () => {
    this.setState({ deleteShowing: false })
  }
  render() {
    return (
      <div className="comment" onMouseEnter={this.showDelete} onMouseLeave={this.hideDelete}>
        <h1>{this.props.comment.username}</h1>
        <p>{this.props.comment.text}</p>
        {this.state.deleteShowing && <img className="deleteImg" src={deleteImg} onClick={this.props.onClick}/>}
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string),
};

export default CommentSection;
