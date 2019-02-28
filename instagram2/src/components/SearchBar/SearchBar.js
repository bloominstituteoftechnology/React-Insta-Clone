import React from "react";
import "../SearchBar/SearchBar.css";
import { Form, Input } from "reactstrap";
import * as Icon from "react-feather";

const SearchBar = props => {
  return (
    <div className="searchBar" >
      <div className="searchBarLeft" >
        <Icon.Instagram className='instaIcon' />
        <img className='instaCursive'
            src='https://fontmeme.com/images/instagram-new-logo.png'
            alt='Instagram Cursive' />
        </div>
      <Form>

      </Form>
    <div className="searchBarRight">

    </div>
    </div>

  )
}

export default SearchBar;
