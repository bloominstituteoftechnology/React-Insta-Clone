import React from 'react';
import styled from 'styled-components';

function Comment({ username, text }) {
  return (
    <Border>
      {' '}
      <Padding>
        {' '}
        <Bold>{username}</Bold> {text}
      </Padding>
    </Border>
  );
}

const Border = styled.div`
  padding: 0 10px;
`;

const Padding = styled.p`
  margin: 0;
`;

const Bold = styled.span`
  font-weight: bold;
  color: #333;
`;

export default Comment;
