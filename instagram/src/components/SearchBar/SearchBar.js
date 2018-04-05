import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

//header should contain the elements of the SearchBar & logos
//figure out how to contain searchbar within Header

// const Header = () => {
//   return (
//     <div class= "Header">
//       <p>hello</p>
//      {/* <img src="http://www.freelogovectors.net/wp-content/uploads/2016/12/instagram-logo1.png" width="24" height="24"/> */}
//   </div>
//   )
// }

// for reference later
const SearchBar = props => {
  return (<div>
    <div className="headerBox">
      <img className="instaLogo" src={require("../../img/instagram-logo-img.png")} />
      <Input className="searchBar" type="text" name="searchBar" placeholder="Search Here!"/>
      <div className= "searchBarIcons">
        <img className="instaLogo" src={require("../../img/compass.png")} />
        <img className="instaLogo" src={require("../../img/heart.png")} />
        <img className="instaLogo" src={require("../../img/user.png")} />
      </div>
    </div>
    
    <div className="logosRight">
     </div>
   </div>)
}
// const logoLeft = () => {
//   return (
//
//   )
// }
//
// const logosRight = () => {
//   return (
//
//   )
// }
export default SearchBar;