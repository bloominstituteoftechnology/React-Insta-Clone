import React from 'react';
import './Header.css';

function HeaderImage(props) {
  return (
    <React.Fragment>
    	<img src={props.imageUrl} className="header-image"></img>
    </React.Fragment>
  );
}

export default HeaderImage;