import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  height: 8rem;
  padding: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  margin-right: 1rem;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`;

const PostHeader = props => {
  return (
    <StyledHeader className="post--header">
      <StyledImage
      className="user--avatar"
      src={props.thumbnailUrl} 
      alt="user's avatar"/>
      <p className="user--name">{props.username}</p>
    </StyledHeader>
  );
}

PostHeader.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default PostHeader;