import React from 'react';
import {IconsHeader} from './SearchBarStyled';

const IconsContainer= props => {
  return (
    <IconsHeader>
     <p><i className="far fa-compass"></i></p>
     <p><i className="far fa-heart"></i></p>
     <p><i className="far fa-user"></i></p>
    </IconsHeader>
  );
};

export default IconsContainer;