import "./SearchBar.css";
import React from 'react';
// import  styled from 'styled-components';

  // const SearchBarWrapper = styled.header`
  //     border-bottom: 1px solid #3333;
  //     height: 80px;
  //     line-height: 70px;
  //     display: flex;
  //     justify-content: space-between;
  //     background: #ffffff;
  // `;

// const ImageWrapper = styled.div`
//     height: 50px;
// `;

// const LogoImage = styled.img`
//     height: 100%; 
//     alt: "instagram logo"
//     src: "https://rawgit.com/LambdaSchool/React-Insta-Clone/4079cf6fb6d11bd3ad7a422cdec35e0aab4e2bfe/instagram/src/assets/iglogo.png"
// `;


const SearchBar = props => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-logo">
        <img alt="instagram image" src="https://papamoabeach.co.nz/wp-content/uploads/2017/03/instagram-icon-black-300x300.png" className="instagram-image" />
        <img alt="instagram logo" src="https://rawgit.com/LambdaSchool/React-Insta-Clone/4079cf6fb6d11bd3ad7a422cdec35e0aab4e2bfe/instagram/src/assets/iglogo.png" className="logo-image" />
      </div>

      {/*search bar*/}
      <form className="search-bar" onSubmit={props.search} onChange={props.handleChange}>
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
}

export default SearchBar;
