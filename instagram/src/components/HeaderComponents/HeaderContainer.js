import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

import HeaderLogos from './HeaderLogos.js';
import SearchBar from './SearchBar.js';
import HeaderIcons from './HeaderIcons.js';

const HeaderContainer = props => {
  return (
    <div className="header">
      <HeaderLogos />
      <SearchBar
        postQueryInput={props.postQueryInput}
        handleChange={props.handleChange} />
      <HeaderIcons />
    </div>
  );
};

HeaderContainer.propTypes = {
  postQueryInput: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default HeaderContainer;