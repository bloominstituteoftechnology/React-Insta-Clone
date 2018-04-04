import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



const Header = () => {
  return (
    <div class= "Header">
     {/* <img src="http://www.freelogovectors.net/wp-content/uploads/2016/12/instagram-logo1.png" width="24" height="24"/> */}
  </div>
  )
}

const searchBar = () => {
  return (
    <div> <Input type="text" name="searchBar" placeholder="Search Here!" /> </div>
  )
}

export default Header;
