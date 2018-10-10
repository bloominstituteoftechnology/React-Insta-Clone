import React from 'react';
import '../SearchBar/searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InstagramTextLogo from '../../imgs/iglogo.png';
import line from '../../imgs/line.png';

const SearchBar = props => {
  return (
    <header className="searchBar">
      <nav>
        <div className="leftIcons">
          <FontAwesomeIcon
            icon={['fab', 'instagram']}
            size="3x"
            className="instagramLogo"
          />
          <img src={line} alt="line" className="line" />
          <img
            src={InstagramTextLogo}
            alt="Instagram text logo"
            className="instagramTextLogo"
          />
        </div>
        <form onSubmit={props.search}>
          <input
            type="text"
            placeholder="search user..."
            className="searchBarInput"
            onChange={props.search}
            value={props.stateSearch}
            name="search"
          />
        </form>
        <div className="rightIcons">
          <FontAwesomeIcon icon={['far', 'compass']} size="3x" />
          <FontAwesomeIcon icon={['far', 'heart']} size="3x" />
          <FontAwesomeIcon icon={['far', 'user']} size="3x" />
        </div>
      </nav>
    </header>
  );
};

export default SearchBar;
