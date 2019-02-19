import React from 'react';

function Comment({ username, text }) {
  return (
    <div style={border}>
      {' '}
      <p style={padding}>
        {' '}
        <span style={bold}>{username}</span> {text}
      </p>
    </div>
  );
}

const border = {
  padding: '0 10px'
};
const padding = {
  margin: '0'
};
const bold = {
  fontWeight: 'bold',
  color: '#333'
};
export default Comment;
