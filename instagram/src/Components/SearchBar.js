import React from "react";
import PropTypes from "prop-types";
import { Instagramtext, Searchdiv, RightIcons } from "./Styles"

const SearchBar = props => {

    return (
        <Searchdiv>
            <div className="search-left">
        <i className="fab fa-instagram fa-2x"></i>
        <p className="line">|</p>
           <Instagramtext>Instagram</Instagramtext>
            </div>
        <input placeholder="Search" type="text"
         className="search-input"
          value={props.filterTarget}
          onChange={props.changeHandler}
           name="filterTarget"/>
        <RightIcons>
        <i className="far fa-compass fa-2x"></i>
        <i className="far fa-heart fa-2x"></i>
        <i className="far fa-user fa-2x"></i>
        </RightIcons>
        </Searchdiv>
    )
}

export default SearchBar;