import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      {/* <div className="insta-logo">
        <img
          alt="instagram logo"
          src="https://cdn-images-1.medium.com/max/1600/1*V7GYJQ_4lykfDzOf9q17eA.jpeg"
          className="logo-image"
        />
      </div> */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
        alt="logo"
      />
      <div>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="social-container">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
