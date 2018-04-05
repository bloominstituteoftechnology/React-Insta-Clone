import React from 'react';

const SearchBar = props => {
  return (
    <div className="searchbar">
      <img src="https://raw.githubusercontent.com/cjmarsh725/React-Insta-Clone/1fb9629edcbb54ca399755abb994a95cde774c3e/instagram/public/img/logo.png" alt="Instagram logo" width='200px'/>
      <input onChange={props.change}
          className="search-input"
          placeholder=" "
          value={props.field}/>
      <div className="search-icons">
        <img src="https://raw.githubusercontent.com/cjmarsh725/React-Insta-Clone/1fb9629edcbb54ca399755abb994a95cde774c3e/instagram/public/img/compass.png" alt="Compass icon" height="35px"/>
        <img src="https://raw.githubusercontent.com/cjmarsh725/React-Insta-Clone/1fb9629edcbb54ca399755abb994a95cde774c3e/instagram/public/img/large-heart.png" alt="Heart icon" height="35px"/>
        <img src="https://raw.githubusercontent.com/cjmarsh725/React-Insta-Clone/1fb9629edcbb54ca399755abb994a95cde774c3e/instagram/public/img/person.png" alt="Person icon" height="35px" />
      </div>
    </div>
  );
}

export default SearchBar;