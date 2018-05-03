import React from 'react';
import './SearchBar.css'

import { Row, Col } from 'reactstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faHeart from '@fortawesome/fontawesome-free-regular/faHeart'
import faCompass from '@fortawesome/fontawesome-free-regular/faCompass'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'

const SearchBar = ({ searchInput, handleChangeSearchBar }) => {
  return (
    <Row className="root">
      <Col xs="1">
        <FontAwesomeIcon icon={faInstagram} />
      </Col>
      <Col xs="3">Instagram</Col>
      <Col xs="1">
        <FontAwesomeIcon icon={faSearch} />
      </Col>
      <Col xs="5">
        <input name="searchInput" type="text" value={searchInput} onChange={e => handleChangeSearchBar(e)}/>
      </Col>
      <Col xs="1">
      <FontAwesomeIcon icon={faCompass} />
      </Col>
      <Col xs="1">
        <FontAwesomeIcon icon={faHeart} />
      </Col>
    </Row>
  );
}

export default SearchBar;
