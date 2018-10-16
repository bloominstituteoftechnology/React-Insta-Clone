import React from 'react'
import './SearchBar.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import * as Icon from 'react-feather'

const SearchBar = props => {
  return(
    <div className="searchBar">
      <div className="searchBarLeft">
        <Icon.Instagram className="instaIcon" />
        <img className="instaCursive"
        src="https://fontmeme.com/images/instagram-new-logo.png" alt="Instagram cursive logo"/>
      </div>
      <Form>
        <FormGroup>
          <Input type="search" name="search" id="exampleSearch" placeholder="🔍 Search" />
        </FormGroup>
      </Form>
      <div className="searchBarRight">
        <Icon.Compass className="navIcons" /> 
        <Icon.Heart className="navIcons" />
        <Icon.User className="navIcons" />
      </div>  
    </div>
  )
}

export default SearchBar;