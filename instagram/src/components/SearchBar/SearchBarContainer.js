import React from 'react';
import iglogo from "./iglogo.png";
import camLogo from "./camera-logo.jpg";
import './SearchBar.css';
import { Input, Container, Row, Col } from "reactstrap";

const SearchBar = ()=> {
    return <div className="search-bar-wrapper">
        <Container>
          <Row>
            <Col lg="1">
              <img style={{ width: "100%" }} className="camLogo" src={camLogo} alt="camera-logo" />
            </Col>
            <Col lg="2">
              <img style={{ width: "100%" }} className="iglogo" src={iglogo} alt="instagram-logo" />
            </Col>
            <Col lg="4">
              <Input style={{ width: 200 }} type="text" placeholder="Search" />
            </Col>
          </Row>
        </Container>
        <div className="image-wrapper" />
        <div className="social wrapper">
          <div className="social">
            <i className="fa fa-heart" />
          </div>
          <div className="social">
            <i className="fa fa-user-circle" />
          </div>
        </div>
      </div>;
};

export default SearchBar;










