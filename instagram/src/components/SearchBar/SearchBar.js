import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.div`
background-color: white;
    position: fixed;
    top: 0;
    height: 60px;
    width: 642px;
    display: flex;
    justify-content: space-between;
    `;

const StyledLeftNav = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 200px;
    justify-content: space-between;
    align-items: center;
    i{
    font-size: 40px;
    }
`;
const StyledInstaText = styled.h4`
    margin: 0;
    padding-left: 20px;
    border-left: 2px solid black;
    font-family: "Lobster Two", "CRoboto"; 
    font-size: 28px; 
`;

const StyledRightNav = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100px;
      `;
const StyledSearch = styled.form`
      align-self: center;
      `;

const SearchBar = props => {
    return (
        <StyledHeader>
            <StyledLeftNav>
                <i className="fab fa-instagram"></i>
                <StyledInstaText>Instagram</StyledInstaText>
            </StyledLeftNav>

            <StyledSearch>
                <input className="fa fa-input" placeholder="&#xf002; Search" onKeyDown={props.searchPosts} />
            </StyledSearch>

            <StyledRightNav>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i class="far fa-user"></i>
            </StyledRightNav>

        </StyledHeader>
    );
}

export default SearchBar;