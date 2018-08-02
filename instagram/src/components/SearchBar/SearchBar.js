import React from 'react';
import { StyledSearchBarContainer, StyledInstagramText, StyledNavIcons, StyledIcons, StyledSearchInput } from './SearchBarStyle';

const SearchBar = props => {
    return(
        <StyledSearchBarContainer>
            <i class="fab fa-instagram fa-4x"></i>

            <StyledInstagramText>
                Instagram
            </StyledInstagramText>
            
            <form onSubmit={props.onSearch}>
                {
                    props.Empty ?
                    <StyledSearchInput
                        type='search'
                        placeholder='Search'
                    ></StyledSearchInput>: 
                    <p>looking up</p>
                }
            </form>
                
            <StyledNavIcons>
                <StyledIcons className='far fa-compass fa-2x'></StyledIcons>
                <StyledIcons className='far fa-heart fa-2x'></StyledIcons>
                <StyledIcons className='far fa-user fa-2x'></StyledIcons>
            </StyledNavIcons>    
        </StyledSearchBarContainer>
    )
}

export default SearchBar;