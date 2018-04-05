import React from 'react';
import instaHeader from '../../img/instaHeader.PNG';

export const SearchBar = () => {
  return (
    <div className="Nav">
      <img src={instaHeader} alt="instagramHeader" className="Nav__logo"s/>
      <input
        type="text"
        placeholder="Search"
        name="searchInstagram"
        className="Nav__input"
      />
      <span>..compass...settings...profile..</span>
    </div>
  )
}
