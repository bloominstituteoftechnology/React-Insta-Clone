import React from 'react';

export const Image = props => {
  return(
    <img
      className={ props.imgClassName }
      src={ props.imgSrc }
    />
  );
}