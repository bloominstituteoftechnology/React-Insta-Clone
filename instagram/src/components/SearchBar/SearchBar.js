import React from 'react'
import { SearchBarDiv, LogoContainer, IGWidget, 
        LineSpacer, IGLogo, SearchInput, IconContainer,
    
    } from '../../Styles'




const SearchBar = (props) => {
    return (
        <SearchBarDiv>
            <LogoContainer>
                <IGWidget></IGWidget>
                <LineSpacer></LineSpacer>
                <IGLogo></IGLogo>
            </LogoContainer>

         <SearchInput 
         placeholder="Search"
         type="text"
         // Add a name for this input
         name="searchInput"
         // add a value
         value={props.searchInput}
         // add our onChange handler
         onChange={props.searchHandler}
         ></SearchInput>

            <IconContainer>
                <i className="far fa-circle"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </IconContainer>
        </SearchBarDiv>
    )
}

export default SearchBar;