import React from 'react';

function Likes({ increaseLike, likes }) {
  return (
    <div>
      <div style={numbers}>{likes}</div>

      <i onClick={increaseLike} style={space} className="far fa-heart" />

      <i style={space} className="far fa-comment" />
    </div>
  );
}

const numbers = {
  margin: '0 10px',
  fontWeight: 'bold'
};

const space = {
  margin: '5px 10px',

  fontSize: ' 25px'
};
// const ico = {
//   fontSize: '25px'
// };

export default Likes;
