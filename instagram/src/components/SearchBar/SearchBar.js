import React from 'react' ;
import styled from 'styled-components' ;
import {SearchBarStyled} from '../MyStyledComponents/MyStyledComponents' ;
// import styled, { css } from 'styled-components' ;



const SearchBar = () => {
    return(
        <SearchBarStyled >
            <form action="">
                <input type="text" placeholder="Search"/>
            </form>
        </SearchBarStyled>

    )
}
export default SearchBar ;
