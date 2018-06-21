import React from 'react';
import '../instagram.css';
import styled from 'styled-components';

const StyledHeader = styled.div`
font-size: 24px;
border: 10px;
border-bottom: 1px solid grey;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 10px;
padding-right: 10px;
padding-top: 25px;
padding-bottom: 25px;
`;

const StyledLogo = styled.div`
max-width: 300px;
max-height: 150px;
`;

const StyledLogoImage = styled.img`
max-width: 200px;
max-height: 100px;
margin-left: 10px;
`;

const StyledSearch = styled.div`
display: flex;
align-items: center;
`;

const StyledSearchIcon = styled.i`

`;


const SearchBar = (props) => {

  return (
    <div>
    {
      <StyledHeader>
        <StyledLogo>
          <i className="fab fa-instagram" style={{fontSize: 50 + "px", marginTop: 50 + "px"}}></i>
          <StyledLogoImage src="https://github.com/LambdaSchool/React-Insta-Clone/blob/day-4-solution/instagram/src/assets/iglogo.png?raw=true"
        alt="" />
        </StyledLogo>
        <StyledSearch>
          <StyledSearchIcon className="fas fa-search"/>
          <form onSubmit={props.searchHandler}>
          <input type="search" name="searchTerm" placeholder="Search" onChange={props.changeHandler} />
          </form>
        </StyledSearch>
        <button onClick={props.handleLogout}>Log Out</button>
      </StyledHeader>
      }
    </div>
  )
}

export default SearchBar;
