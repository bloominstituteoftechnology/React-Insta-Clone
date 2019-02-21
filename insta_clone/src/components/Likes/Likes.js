import React from 'react';
import styled from 'styled-components';

const SLikes = styled.div`
  margin: 0 10px;
  font-weight: bold;
`;

const I = styled.i`
  margin: 5px 10px;
  font-size: 25px;
`;

function Likes({ increaseLike, likes }) {
  return (
    <div>
      <SLikes>{likes}</SLikes>

      <I onClick={increaseLike} className="far fa-heart" />

      <I className="far fa-comment" />
    </div>
  );
}

// const ico = {
//   fontSize: '25px'
// };

export default Likes;
