import React from 'react';
import { SBIcons, SBListItem } from './../Styled/styled';

class SearchBarIcons extends React.Component {
  clearStorage = event => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    return (
      <>
        <SBIcons>
          <SBListItem onClick={this.clearStorage}>Log Out</SBListItem>
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </SBIcons>
      </>
    );
  }
}

export default SearchBarIcons;
