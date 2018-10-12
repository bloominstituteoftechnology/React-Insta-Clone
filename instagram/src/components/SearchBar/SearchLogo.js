import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const SearchLogoDiv = styled.div`
    display: flex;
`

const Separator = styled.div`
    font-size: 24px;
    padding: 0 18px;
`
const SearchImg = styled.img`
    height: 32px;
`

const SearchLogo = (props) =>  {
    return(
        <SearchLogoDiv>
            <i className="fab fa-instagram fa-2x" aria-hidden="true"></i>
            <Separator>|</Separator>
            <SearchImg src="https://vignette.wikia.nocookie.net/logopedia/images/a/aa/Instagram_wordmark.svg/revision/latest?cb=20140110161419" alt="instagram wordmark" />
        </SearchLogoDiv>
    )
}

export default SearchLogo;
