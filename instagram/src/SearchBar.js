import React from "react";
import Logo from "./assets/ig_search_bar.png";

function SearchBar(props) {
    return (
      <section className="searchBar">
        <img src={Logo} alt="logo"/>
      </section> 
    );
}

export default SearchBar;
