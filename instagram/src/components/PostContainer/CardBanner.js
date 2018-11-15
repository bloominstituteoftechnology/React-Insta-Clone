import React from 'react';
import './Card.css';

function CardBanner(props) {
  return (
    <React.Fragment>
    	<img src={props.imageUrl} className="card-banner"></img>
    </React.Fragment>
  );
}

export default CardBanner;