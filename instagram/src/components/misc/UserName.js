import React from 'react';

export const UserName = props => {
  return(
    <p
      className={ props.userNameClassName }
    >
      { props.userName }
    </p>
  );
}