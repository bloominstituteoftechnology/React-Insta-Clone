import React from 'react';

export const UserName = props => {
  return(
    <span
      className={ props.userNameClassName }
    >
      { props.userName }
    </span>
  );
}