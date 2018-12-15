import React, { Component } from 'react';
import './Card.css';
import Comment from './Comment/Comment';
import Heart from './../../../assets/insta-heart.png';
import CommentIcon from './../../../assets/insta-comment.png';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: 'Add a comment'
    }
  }

  setComment = (e) => this.setState({ comment: e.target.value });

  render() {
    const { textInput } = this.state;
    const { card, addComment } = this.props;

    return (
      <div className="Card">
        <div className="cardHeader">
          <img src={card.thumbnailUrl} alt="thumbnail" />
          <p>{card.username}</p>
        </div>
  
        <img src={card.imageUrl} className="cardIMG" alt="post IMG" />
  
        <div className="comments">
          <div className="icons">
            <img src={Heart} alt="Heart Icon" />
            <img src={CommentIcon} alt="chat icon" />
            <p>{card.likes} likes</p>
          </div>
          {card.comments.map(comment => (
            <Comment key={comment.timestamp} comment={comment} />
          ))}
          <p className="timestamp">{card.timestamp}</p>
        </div>
  
        <form onSubmit={() => addComment(textInput, card.id)}>
          <input
            type="submit"
            className="commentInput"
            value={textInput}
            onChange={this.setComment} />
        </form>
      </div>
    );
  }
}

Card.propTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  timestamp: PropTypes.string
};

export default Card;