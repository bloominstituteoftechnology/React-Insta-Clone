import React from "react";
import { Input } from "reactstrap";
import {
  FiInstagram,
  FiCompass,
  FiHeart,
  FiUser,
  FiLogOut
} from "react-icons/fi";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-bar-container">
      <div className="logo-container">
        <FiInstagram className="icon logo" />
        <h1 id="header-logo">SlightDelayGram</h1>
      </div>
      <Input
        id="search-input"
        type="text"
        placeholder="Search"
        onChange={props.changeHandler}
        value={props.searchState}
      />
      <div className="header-icon-container">
        <FiCompass className="icon" />
        <FiHeart className="icon" />
        <FiUser className="icon" />
        <FiLogOut className="icon" onClick={props.logout} />
      </div>
    </div>
  );
};
export default SearchBar;
