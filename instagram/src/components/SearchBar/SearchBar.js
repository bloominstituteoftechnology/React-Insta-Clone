import React from 'react';
import instaHeader from '../../img/instaHeader.PNG';
import FaCompass from '../../../node_modules/react-icons/lib/fa/compass';
import FaHeartO from '../../../node_modules/react-icons/lib/fa/heart-o';
import FaInstagram from '../../../node_modules/react-icons/lib/fa/instagram'; /*<FaInstagram className="Icons" /> | <img src={instaHeader} className="" />*/
import Person from '../../../node_modules/react-icons/lib/md/person';

export const SearchBar = () => {
  return (
    <div className="Nav">
      <div><img src={instaHeader} className="Nav__logo" /></div>
      <input
        type="text"
        placeholder="Search"
        name="searchInstagram"
        className="Nav__input"
      />
      <div className="Nav__icons">
        <FaCompass className="Icons" />
        <FaHeartO className="Icons" />
        <Person className="Icons" />
      </div>
    </div>
  )
}
