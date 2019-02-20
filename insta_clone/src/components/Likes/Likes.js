import React from 'react';

function Likes({ increaseLike, likes }) {
  return (
    <div>
      <strong>{likes}</strong>

      <i onClick={increaseLike} style={space} className="far fa-heart" />

      <i style={space} className="far fa-comment" />
    </div>
  );
}

const space = {
  paddingRight: '20px'
};
// const ico = {
//   fontSize: '25px'
// };

export default Likes;
