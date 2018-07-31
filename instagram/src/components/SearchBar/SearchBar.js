import React, { Component } from 'react';
import './SearchBar.css';
import  iglogo from "../../assets/iglogo.png";
import  igicons from "../../assets/igicons.png";

    const SearchBar  = (props) => {
      return(
        <nav className="navbar navbar-expand-lg navbar-light ">
          <img alt="instagram logo" src={iglogo} className="logo" />


          <div className="row" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>

            </form>
          <img alt="instagram icons" src={igicons} className="icons" />
          </div>
        </nav>
      )

      }
    export default SearchBar
