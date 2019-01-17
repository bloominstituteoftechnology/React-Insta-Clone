import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import './search-bar.css'

const SearchContainer = styled.div`
    font-family: 'Grand Hotel', cursive;
    width: 100%;
    padding: 20px 0;
    border-bottom: 2px solid #E2E2E2;
`
const SearchItemContainer = styled.div`
    max-width: 900px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const SearchHeading = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const LogoIcon = styled.div`
    padding-right: 15px;
    border-right: 1px solid black;
`
const MainHeading = styled.h1`
    margin-left: 20px;
    font-size: 3rem;
    color: #343434;
    letter-spacing: 1px;
`
const SearchInput = styled.input`
    padding: 3px 18px;
`
const SearchActionContainer = styled.div`
    width: 133px;
    display: flex;
    justify-content: space-between;
`
const SearchActionIcon = styled.div`
    margin-left: 10px;
`
const LogoutIcon = styled.div`
    margin-left: 10px;
    :hover {
      cursor: pointer;
    }
`
const SearchBar = props => {
  return (
    <SearchContainer>
      <SearchItemContainer>
        <SearchHeading>
          <LogoIcon className="fab fa-instagram fa-3x"></LogoIcon>
          <MainHeading>Instagram</MainHeading>      
        </SearchHeading>
        <SearchInput type="text" onChange={props.onChange} name="searchValue" value={props.value}/>
        <SearchActionContainer>
          <SearchActionIcon className="far fa-compass fa-2x"></SearchActionIcon>
          <SearchActionIcon className="far fa-heart fa-2x"></SearchActionIcon>
          <LogoutIcon className="far fa-user fa-2x" onClick={props.logout}></LogoutIcon>
        </SearchActionContainer>
      </SearchItemContainer>


    </SearchContainer>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  logout: PropTypes.func,
}
export default SearchBar
