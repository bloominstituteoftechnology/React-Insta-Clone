import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Row, Col, Container } from "reactstrap";
import "./SearchBar.css";

// const SearchBar = props => {
//   return (
//     <div>
//       <i class="fab fa-instagram" />
//     </div>
//   );
// };

const SearchBar = props => {
  return (
    <Container id="header">
      <Row className="my-3">
        <Col sm={1} className="col1 pr-5 d-flex">
          <img
            className="logo align-self-center"
            src="http://www.clker.com/cliparts/U/d/x/w/I/q/instagram-logo-md.png"
            alt="Logo"
          />
        </Col>
        <Col className="col2" sm={3}>
          <p className="m-0">Instagram</p>
        </Col>
        <Col sm={4}>
          <InputGroup className="align-self-center">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <img
                  className="search-icon"
                  src="http://www.clker.com/cliparts/z/1/T/u/9/2/search-icon-hi.png"
                  alt="search icon"
                />
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="search" />
          </InputGroup>
        </Col>
        <Col
          className="d-flex justify-content-around align-items-center"
          sm={3}
        >
          <i className="far fa-compass fa-lg" />
          <i className="far fa-heart fa-lg" />
          <i className="far fa-user fa-lg" />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
