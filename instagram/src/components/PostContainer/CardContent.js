import React from 'react';
import './Card.css';

function CardContent(props) {
  return (
    <div className="card-content">
      <h2 className="card-title">{props.cardTitle}</h2>
      <div className="card-text">{props.cardText}</div>
      <div className="card-source">{props.cardSource}</div>
    </div>
  );
}

export default CardContent;