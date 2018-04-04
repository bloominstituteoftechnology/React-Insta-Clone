import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const SearchBar = () => {
  return (
    <div class= "searchBar">
     <Input type="text" name="searchBar" placeholder="Search Here!" />
       <img src="./img/dabman.png" alt="dabman" className="dabman-responsive"/>
  </div>
  )
}

export default SearchBar;
