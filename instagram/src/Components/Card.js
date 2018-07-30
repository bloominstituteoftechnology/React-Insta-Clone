import React from 'react';
import './Card.css';
import Comments from './Comments';

const Card = ({
  username,
  thumbnailUrl,
  imageUrl,
  likes,
  timestamp,
  comments
}) => {
  return (
    <section className="Card">
      <div className="Card__header">
        <img className="Card__thumbnail" src={thumbnailUrl} alt="Thumbnail" />
        <span className="Card__username">{username}</span>
      </div>
      <div className="Card__banner">
        <img className="Card__banner-img" src={imageUrl} />
      </div>
      <div className="Card__icons">
        <i class="far fa-heart" />
        <i class="far fa-comment" />
      </div>
      <div className="Card__likes">{likes} likes</div>
      <Comments {...{ timestamp, comments }} />
      <div className="Card__input-wrapper">
        <input
          className="Card__input"
          type="text"
          placeholder="Add a comment..."
        />
        <i class="fas fa-ellipsis-h" />
      </div>
    </section>
  );
};

export default Card;
