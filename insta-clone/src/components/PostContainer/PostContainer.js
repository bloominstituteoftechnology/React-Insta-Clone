import React from 'react';
import './PostContainer.css';
import Card from './Card/Card';

const PostContainer = props => {
  const { posts } = props;

  return (
    <div className="PostContainer">
      {posts.map(card => (
        <Card key={card.timestamp} card={card} addComment={props.addComment} />
      ))}
    </div>
  );
};

export default PostContainer;