import React from "react";

import PropTypes from "prop-types";

import './CommentSection.css';

class CommentSection extends React.Component {
  state = {
    comments: [],
    userComment: ""
  };

  componentDidMount() {
    this.setState({
      comments: this.props.comments
    })
  }

  addNewComment = event => {
    event.preventDefault();
    this.setState({
      comments: [...this.state.comments,
      {username: 'pfunk', text: this.state.userComment}]
    })
  };

  handleChanges = event => {
    event.preventDefault();
    this.setState({
      userComment: event.target.value
    });
    console.log(this.state.userComment)
  }


  render() {
    console.log(this.state.comments);
    return (
      <div>
        {this.state.comments.map((post, index) => (
          <div key={index} className="individualComments">
            <strong className="username">{post.username}</strong>
            <p className="commentText">{post.text}</p>
          </div>
        ))}

        <form onSubmit={this.addNewComment}>
          <input 
            type="text"  
            placeholder="comment" 
            value={this.state.userComment}
            onChange={this.handleChanges}
            />
          <button onClick={this.addNewComment}>Post</button>
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number
    })
  )
};

export default CommentSection;
