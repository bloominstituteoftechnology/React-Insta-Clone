import React from 'react';

class SearchBarIcons extends React.Component {
  clearStorage = event => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    return (
      <>
        <div className="searchBarIcons">
          <li onClick={this.clearStorage}>Log Out</li>
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </div>
      </>
    );
  }
}

export default SearchBarIcons;
