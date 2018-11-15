import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from './CardContent';

const cardText = "React makes it painless to create interactive UIs. Desing Simple views for each state in your application.";

function CardContainer() {
  return (
  	//currently hardcoding values here but I think when I get everything working, I want to try to load an entire
  	//card by making one function call from app.js or something similarly "main"-ish
    <div className="card-container">
    	<CardBanner imageUrl="https://ibin.co/3wnC6SgIOJud.png" />
    	<CardContent cardTitle="Get started with React" cardText={cardText} cardSource="reactjs.org"  />
    </div>
  );
}

export default CardContainer;