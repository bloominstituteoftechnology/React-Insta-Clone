import React from 'react';
import './Footer.css';

function FooterContent(props) {
  return (
    
	<React.Fragment>
    	<div className="comments">{props.numberOfComments}</div>
     	<div className="retweets">{props.numberOfRetweets}</div>
    	<div className="likes">{props.numberOfLikes}</div>
    	<div className="direct-message"></div>
    </React.Fragment>

  );
}

export default FooterContent;