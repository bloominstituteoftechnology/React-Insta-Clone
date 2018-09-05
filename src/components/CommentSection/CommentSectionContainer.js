import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      likes: props.likes,
      comment: ''
    };
  }

  incrementLikes = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  }

  addComment = e => {
    let newComment = {
      username: 'OwenWilson',
      text: this.state.comment
    }
    this.setState({
      comments: [...this.state.comments, newComment],
      comment: ''
    })
    e.preventDefault();
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // increase likes

  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faHeart} onClick={this.incrementLikes}/> <FontAwesomeIcon icon={faComment} /> <FontAwesomeIcon icon={faPaperPlane} />
        <p>Likes: {this.state.likes}</p>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput handleInput={this.handleInput} addComment={this.addComment} id={this.props.id} commentValue={this.state.comment} />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
