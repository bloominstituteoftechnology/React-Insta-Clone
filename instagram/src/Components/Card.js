import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <section className="Card">
      <div className="Card__header">
        <img
          className="Card__thumbnail"
          src="https://tk-assets.lambdaschool.com/ecd33d34-c124-4b75-92d2-e5c52c171ed8_11201517_887808411287357_1307163552_a.jpg"
          alt="Thumbnail"
        />
        <span className="Card__username">philzcoffee</span>
      </div>
      <div className="Card__banner">
        <img
          className="Card__banner-img"
          src="https://tk-assets.lambdaschool.com/69cf901b-f96d-466e-a745-ff2a01effac9_philz-image.jpg"
        />
      </div>
      <div className="Card__icons">
        <i class="far fa-heart" />
        <i class="far fa-comment" />
      </div>
      <div className="Card__likes">400 likes</div>
      <div className="Card__comments">
        <div className="Card__comment">
          <p>
            <span className="Card__comment-user">philzcoffee</span>
            We've got more than just delicious coffees to offer at our shops!
          </p>
        </div>
        <div className="Card__comment">
          <p>
            <span className="Card__comment-user">philzcoffee</span>
            We've got more than just delicious coffees to offer at our shops!
          </p>
        </div>
        <div className="Card__last-comment">1 Day Ago</div>
      </div>
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
