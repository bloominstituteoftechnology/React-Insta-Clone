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
         name="filterTarget"
         value={props.filterTarget}
         onChange={props.filter}
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