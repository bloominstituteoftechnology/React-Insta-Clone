import React from 'react';
import styled from 'styled-components';

const SearchBarActionIcons = styled.div`
  align-items: center;
  display: flex;
  font-size: 25px;
`;

const SearchBarActionIcon = styled.span`
  margin-left: 15px;
`;

const SearchBarActions = () => {
  return (
    <SearchBarActionIcons>
      <SearchBarActionIcon>
        <i className="far fa-compass" />
      </SearchBarActionIcon>
      <SearchBarActionIcon>
        <i className="far fa-heart" />
      </SearchBarActionIcon>
      <SearchBarActionIcon>
        <i className="far fa-user" />
      </SearchBarActionIcon>
    </SearchBarActionIcons>
  );
}

export default SearchBarActions;
