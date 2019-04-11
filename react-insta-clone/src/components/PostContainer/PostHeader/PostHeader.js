import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.section`
  align-items: center;
  display: flex;
  padding: 0 0 0 14px;

`;

const Image = styled.img`
  border: 1px solid transparent;
  border-radius: 50%;
  width: 30px;
`;

const Title = styled.h2`
  font-size: 14px;
  padding: 0 10px;
`;

const PostHeader = (props) => {
  return (
    <Header>
      <Image src={props.thumbnailUrl} alt={props.username}/>
    <Title>{props.username}</Title>
  </Header>
  );
}

PostHeader.propTypes = {
  username: propTypes.string,
  thumbnailUrl: propTypes.string
}

export default PostHeader;
