import React from 'react';
import './Card.css';
import Comment from './Comment/Comment';
import Heart from './../../../assets/insta-heart.png';
import CommentIcon from './../../../assets/insta-comment.png';

const Card = props => {
  const { card } = props;

  return (
    <div className="Card">
      <div className="cardHeader">
        <img src={card.thumbnailUrl} alt="thumbnail" />
        <p>{card.username}</p>
      </div>

      <img src={card.imageUrl} alt="post IMG" />

      <div className="comments">
        <div className="icons">
          <img src={Heart} alt="Heart Icon" />
          <img src={CommentIcon} alt="chat icon" />
          <p>{card.likes} likes</p>
        </div>
        {card.comments.map(comment => (
          <Comment comment={comment} />
        ))}
        <p>{card.timestamp}</p>
      </div>

    </div>
  );
};

export default Card;