import React from "react";
import "./Search.css";
import styled from "styled-components";

const SearchBardiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: solid red 1px; */
  width: 640px;
  margin: 0 auto;
  margin-left: 33%;

   .leftofsearch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: solid black 1px; */
    width: 20%;
    font-size: 1.6rem;
  }

  .leftofsearch .logotext {
    /* border-left: solid black 1px; */
    padding-left: 5px;
    font-family: "Oleo Script", cursive;
  }

  .rightofsearch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: solid black 1px; */
    width: 30%;
    font-size: 1.6rem;
  }
`;

export default function SearchBar(props) {
  return (
    <SearchBardiv className="SearchBar">
      <div className="leftofsearch">
        <i className="fab fa-instagram" />
        <div className="logotext">Instagram</div>
      </div>

      <div className="search">
        {/* <i className="fas fa-search" aria-hidden="true" /> */}
        <input
          name="text"
          type="text"
          placeholder="Search"
          onChange={props.searchfn}
        />
      </div>

      <div className="rightofsearch">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </SearchBardiv>
  );
}
