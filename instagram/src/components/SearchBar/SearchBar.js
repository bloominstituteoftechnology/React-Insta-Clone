import React from "react";
import "./SearchBar.css";
import { Container, Row, Col } from "reactstrap";

const SearchBar = ({ search }) => {
  return (
    <Container className="search-bar">
      <Row>
        <Col sm="4">
          <h1 className="header-logo">
            <i className="fa fa-instagram instagram-icon" />
            <span>Instagram</span>
          </h1>
        </Col>
        <Col sm="4">
          <input type="search" placeholder="Search" onChange={search} />
        </Col>
        <Col sm="4" className="right-icons">
          <i className="fa fa-compass fa-2x" />
          <i className="fa fa-heart fa-2x" />
          <i className="fa fa-user fa-2x" />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
