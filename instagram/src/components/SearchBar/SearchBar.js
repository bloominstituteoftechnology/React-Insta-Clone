import React from "react";
import styled from 'styled-components'
import IGLogo from "../../assets/iglogo.png";
import PropTypes from "prop-types";
import "./SearchBar.css";

const SearchBarWrapper = styled.div`
  border-bottom: 1px solid #3333;
  height: 60px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`
const ImageWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`
const LogoImage = styled.img`
  height: 100%;
  margin-top: 5px;
  padding-left: 10px;
`
const InputWrapper = styled.div`
  width: 40%;
`
const SocialWrapper = styled.div`
  display: flex;
`

const SearchBar = props => {
  return (
    <SearchBarWrapper>
      <ImageWrapper>
        <i className="fab fa-instagram" />
        <LogoImage alt="instagram logo" src={IGLogo} />
      </ImageWrapper>
      <InputWrapper>
        <input
          className="input-field-search"
          type="text"
          placeholder=" Search"
          onChange={props.searchPosts}
        />
      </InputWrapper>
      <SocialWrapper>
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </SocialWrapper>
    </SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  searchPosts: PropTypes.func
}

export default SearchBar;
