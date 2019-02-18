import React from 'react';

function User({ name, img }) {
  return (
    <div>
      {' '}
      <img src={img} alt="" />
      <h1>{name}</h1>
    </div>
  );
}

export default User;
