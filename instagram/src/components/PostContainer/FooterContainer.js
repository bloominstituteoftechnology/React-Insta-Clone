import React from 'react';
import './Footer.css';
import FooterContent from './FooterContent';

//const cardText = "React makes it painless to create interactive UIs. Desing Simple views for each state in your application.";

function FooterContainer() {
  return (
  	//currently hardcoding values here but I think when I get everything working, I want to try to load an entire
  	//card by making one function call from app.js or something similarly "main"-ish
     <div className="card-footer">
    	<FooterContent numberOfComments={0} numberOfRetweets={6} numberOfLikes={4}  />
    </div>
  );
}

export default FooterContainer;