import React from 'react';

const SearchBar = props => {
  return (
    <div className="searchbar">
      <img src="https://raw.githubusercontent.com/cjmarsh725/React-Insta-Clone/1fb9629edcbb54ca399755abb994a95cde774c3e/instagram/public/img/logo.png" alt="Instagram logo" />
      <input onChange={props.change}
          className="search-input"
          placeholder=" "
          value={props.field}/>
      <div className="search-icons">
        <img src="https://raw.githubusercontent.com/cjmarsh725/React-Insta-Clone/1fb9629edcbb54ca399755abb994a95cde774c3e/instagram/public/img/compass.png" alt="Compass icon" />
        <img src="https://raw.githubusercontent.com/cjmarsh725/React-Insta-Clone/1fb9629edcbb54ca399755abb994a95cde774c3e/instagram/public/img/large-heart.png" alt="Heart icon" />
        <img src="https://raw.githubusercontent.com/cjmarsh725/React-Insta-Clone/1fb9629edcbb54ca399755abb994a95cde774c3e/instagram/public/img/person.png" alt="Person icon" />
      </div>
    </div>
  );
}

export default SearchBar;