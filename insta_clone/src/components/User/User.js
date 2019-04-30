import React from 'react';

function User({ username, thumbnaiilUrl }) {
  return (
    <div style={imgg}>
      {' '}
      <img style={userico} src={thumbnaiilUrl} alt="" />
      <h4>{username}</h4>
    </div>
  );
}

const userico = {
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  padding: ' 0 10px'
};

const imgg = {
  display: 'flex',
  alignItems: 'center'
};

export default User;
