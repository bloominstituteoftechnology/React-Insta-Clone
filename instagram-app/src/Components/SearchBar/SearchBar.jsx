import React from "react";
import "./Search.css";

export default function SearchBar() {
  return (
    <div className="SearchBar">

      <div className="leftofsearch">
        <i class="fab fa-instagram" />
        <div className="logotext">Instagram</div>
      </div>

      <div className="search">
        <i class="fas fa-search" aria-hidden="true" />
        <input placeholder="Search" />
      </div>

      <div className="rightofsearch">
        <i class="far fa-compass" />
        <i class="far fa-heart" />
        <i class="far fa-user" />
      </div>
    </div>
  );
}
