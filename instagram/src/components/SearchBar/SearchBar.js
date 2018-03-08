import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Row, Col } from "reactstrap";
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
    <container>
      <Row className="my-2">
        <Col sm="1" className="col1">
          <img
            className="logo"
            src="http://www.clker.com/cliparts/U/d/x/w/I/q/instagram-logo-md.png"
            alt="Logo"
          />
        </Col>
        <Col sm="1">
          <p>Instagram</p>
        </Col>
        <Col sm="7" md={{ size: 4, offset: 2 }}>
          <InputGroup>
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
      </Row>
    </container>
  );
};

export default SearchBar;
