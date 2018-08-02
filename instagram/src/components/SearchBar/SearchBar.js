import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <div><img className="logo-img" src="https://i.warosu.org/data/fa/img/0113/35/1464364597775.jpg" /><img className="logo-font-img" src="https://cdn.iphoneincanada.ca/wp-content/uploads/2017/06/Instagram_logo.svg_.png " alt="Logo" /></div>
      <form onSubmit={props.searchSubmit}><input onChange={props.searchItem} className="search-bar-input" placeholder="Search..." value={props.searchValue} /></form>
      <div className="search-bar-icon-container"> <img onClick={props.logOut} className="search-bar-icons" src="https://image.freepik.com/free-icon/safari-compass-logo-ios-7-interface-symbol_318-36575.jpg" /> <img className="search-bar-icons" src="https://d30y9cdsu7xlg0.cloudfront.net/png/682470-200.png" /> <img className="search-bar-icons" src="http://superawesomevectors.com/wp-content/uploads/2017/10/person-outline-free-vector-icon-800x566.jpg" /> </div>
    </div>
  );
}
export default SearchBar;
