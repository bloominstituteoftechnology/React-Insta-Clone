import React from 'react'
import { SearchBarDiv, LogoContainer, IGWidget, 
        LineSpacer, IGLogo, SearchInput, IconContainer,
    
    } from '../../Styles'




const SearchBar = () => {
    return (
        <SearchBarDiv>
            <LogoContainer>
                <IGWidget></IGWidget>
                <LineSpacer></LineSpacer>
                <IGLogo></IGLogo>
            </LogoContainer>

         <SearchInput placeholder="search"></SearchInput>

            <IconContainer>
                <i className="far fa-circle"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </IconContainer>
        </SearchBarDiv>
    )
}

export default SearchBar;