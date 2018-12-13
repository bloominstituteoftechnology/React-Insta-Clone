import React from 'react';
import './Card.css';

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
        {card.comments.map(comment => (
          <Comment />
        ))}
      </div>
    </div>
  );
};

export default Card;