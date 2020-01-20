import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div>
      {/* ☞ 8f646e2b-8849-477c-a200-080dd79c22a9 */}
      <span className="SearchBar-container">
        <img
          className="SearchBar-icons"
          src="https://image.flaticon.com/icons/svg/1077/1077042.svg"
          alt="instagram logo"
        />
        <span className="Wordmark">Instagram</span>
        <span>
          <form className="SearchBar-row">
            <input
              className="searchInput"
              name="search"
              type="text"
              placeholder="Search"
              // onChange={this.handleInputChange}
            />
            <input type="submit" value="Find this!" />
          </form>
        </span>
        <span>
          <img
            className="SearchBar-icons"
            src="https://image.flaticon.com/icons/svg/77/77521.svg"
            alt="explore"
          />
        </span>
        <span>
          <img
            className="SearchBar-icons"
            src="https://image.flaticon.com/icons/svg/149/149217.svg"
            alt="likes"
          />
        </span>
        <span>
          <img
            className="SearchBar-icons"
            src="https://image.flaticon.com/icons/svg/126/126486.svg"
            alt="avatar"
          />
        </span>
      </span>

    </div>
  );
};
export default SearchBar;
