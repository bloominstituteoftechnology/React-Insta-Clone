import React from 'react';
import './PostContainer.css';
import Card from './Card/Card';

const PostContainer = props => {
  const { posts } = props;

  return (
    <div className="PostContainer">
      {posts.map(card => (
        <Card key={card.timestamp} card={card} />
      ))}
    </div>
  );
};

export default PostContainer;