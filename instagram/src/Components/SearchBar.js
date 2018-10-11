import React from "react";
import PropTypes from "prop-types";
import { Instagramtext, Searchdiv, RightIcons, SearchInput, SearchLeft } from "./Styles"

const SearchBar = props => {

    return (
        <Searchdiv>
            <SearchLeft>
        <i className="fab fa-instagram fa-2x"></i>
        <p className="line">|</p>
           <Instagramtext>Instagram</Instagramtext>
           </SearchLeft>
            <SearchInput placeholder="Search" type="text" value={props.filterTarget} onChange={props.changeHandler} name="filterTarget"></SearchInput>
        <RightIcons>
        <i className="far fa-compass fa-2x"></i>
        <i className="far fa-heart fa-2x"></i>
        <i className="far fa-user fa-2x"></i>
        </RightIcons>
        </Searchdiv>
    )
}

export default SearchBar;