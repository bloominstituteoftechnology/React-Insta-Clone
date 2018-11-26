import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UserThumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 10px 10px;
`

const Username = styled.p`
  font-weight: bold;
`

const UserDiv = styled.div`
  display: flex;
  align-items: center;
`

const User = props => {
  const {username, thumbnailUrl} = props;

  return (
    <UserDiv>
      <UserThumbnail src={ thumbnailUrl } alt={ username } />
      <Username />
    </UserDiv>
  )
}

User.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired
}

export default User;