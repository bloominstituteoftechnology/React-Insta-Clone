import React from "react";
import iglogo from "./iglogo.png";
import camLogo from "./camera-logo.jpg";
import "./SearchBar.css";
//import { Input, Container, Row, Col } from "reactstrap";

const SearchBar = props => {
  /* return <div className="search-bar-wrapper">
       <Container>
          <Row>
            <Col lg="1">
              <img style={{ width: "100%" }} className="camLogo" src={camLogo} alt="camera-logo" />
            </Col>
            <Col lg="2">
              <img style={{ width: "100%" }} className="iglogo" src={iglogo} alt="instagram-logo" />
            </Col>
            <Col lg="4">
              <Input style={{ width: 200, textAlign:"center"}} type="text" placeholder="Search" />
            </Col>
        </Row>

      </Container>
     */

  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <img className="camLogo" src={camLogo} alt="camera-logo" />

        <img className="iglogo" src={iglogo} alt="instagram-logo" />
      </div>

      <form on Submit={props.search} onChange={props.handleChange}>
        <input
          style={{ textAlign: "center", width: "400px", height:"40px"}}
          type="text"
          placeholder="Search"
        />
      </form>

      <div className="social wrapper">
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
        <div className="social">
          <i className="far fa-compass" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
