import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "react-bulma-components/lib/components/navbar";
import SearchBar from "./SearchBar/SearchBar";
import "./Header.scss";

const Header = props => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item renderAs="a" href="#">
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            size="3x"
            className="border-right"
          />
          <hr className="vr"/>
          <div className="logoContent" />
        </Navbar.Item>
      </Navbar.Brand>
      <Navbar.Item>
        <SearchBar />
      </Navbar.Item>
      <Navbar.Item>
        <Navbar.Item href="#">
          <FontAwesomeIcon icon={["far", "compass"]} size="2x" />
        </Navbar.Item>
        <Navbar.Item href="#">
          <FontAwesomeIcon icon={["far", "heart"]} size="2x" />
        </Navbar.Item>
        <Navbar.Item href="#">
          <FontAwesomeIcon icon={["far", "user"]} size="2x" />
        </Navbar.Item>
      </Navbar.Item>
    </Navbar>
  );
};

export default Header;
