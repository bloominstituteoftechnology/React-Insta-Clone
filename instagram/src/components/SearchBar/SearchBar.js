import React, { Component } from 'react';
import './SearchBar.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';

    const SearchBar  = () => {
      return(
        <nav className="Nav">
          <div className="Nav-menus">
            <div className="Nav-brand">
              <a className="Nav-brand-logo" href="/">
                Instagram
              </a>
            </div>
          </div>
        </nav>
      )

      }
    export default SearchBar
