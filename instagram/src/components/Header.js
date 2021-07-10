import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "react-bulma-components/lib/components/navbar";
import SearchBar from "./SearchBar/SearchBar";
import Container from "react-bulma-components/lib/components/container";
import "./Header.scss";

const Header = props => {
  return (
    <Navbar className="is-transparent" fixed="top">
    <Container>
      <Navbar.Brand>
        <Navbar.Item renderAs="a" href="#">
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            size="2x"
            className="border-right"
          />
          <hr className="vr"/>
          <div className="logoContent" />
        </Navbar.Item>
      </Navbar.Brand>
      <Navbar.Item>
        <SearchBar />
      </Navbar.Item>
      <Navbar.Item renderAs="div">
        <Navbar.Item href="#">
          <FontAwesomeIcon icon={["far", "compass"]} size="lg" />
        </Navbar.Item>
        <Navbar.Item href="#">
          <FontAwesomeIcon icon={["far", "heart"]} size="lg" />
        </Navbar.Item>
        <Navbar.Item href="#">
          <FontAwesomeIcon icon={["far", "user"]} size="lg" />
        </Navbar.Item>
      </Navbar.Item>
      </Container>
    </Navbar>
  );
};

export default Header;
