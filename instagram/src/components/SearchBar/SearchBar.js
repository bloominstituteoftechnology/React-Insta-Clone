import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';

import { Row, Col } from 'reactstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faHeart from '@fortawesome/fontawesome-free-regular/faHeart'
import faCompass from '@fortawesome/fontawesome-free-regular/faCompass'
import faUserCircle from '@fortawesome/fontawesome-free-regular/faUserCircle'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'

const SearchBar = ({ searchInput, handleChangeSearchBar }) => {
  return (
    <Row className="rootSearchBar">
      <Col xs="2">
        <div className="d-flex justify-content-between align-items-center">
          <FontAwesomeIcon icon={faInstagram} />
          Instagram
        </div>
      </Col>
      <Col xs="8">
        <div className="d-flex justify-content-center align-items-center">
          <input 
            name="searchInput" 
            type="text" 
            placeholder="&#128269; Search"
            value={searchInput} 
            onChange={e => handleChangeSearchBar(e)}/>
        </div>
      </Col>
      <Col xs="2">
        <div className="lightIcon d-flex justify-content-between align-items-center">
          <FontAwesomeIcon icon={faCompass} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faUserCircle} />
        </div>
      </Col>
    </Row>
  );
}

SearchBar.propTypes = { 
  searchInput: PropTypes.string.isRequired,
  handleChangeSearchBar: PropTypes.func.isRequired
}

export default SearchBar;
