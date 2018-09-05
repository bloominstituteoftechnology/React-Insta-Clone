// import React from 'react';
// // import PropTypes from 'prop-types';
// import './SearchBar.css';



// const SearchBar = props => {
//     return(
//         <div className="header">
//             <img className="instagram-img" src="" alt="instagram-logo"/>
//         </div>
//     );

// }

// export default SearchBar;

import React from "react";
// import IGLogo from "";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <img alt="instagram logo" src="https://rawgit.com/LambdaSchool/React-Insta-Clone/4079cf6fb6d11bd3ad7a422cdec35e0aab4e2bfe/instagram/src/assets/iglogo.png" className="logo-image" />
      </div>
      <form onSubmit={props.search} onChange={props.handleChange}>
        <input name="search" type="text" placeholder="Search" />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="fa fa-compass" />
        </div>
        <div className="social">
          <i className="fa fa-heart" />
        </div>
        <div className="social">
          <i className="fa fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
