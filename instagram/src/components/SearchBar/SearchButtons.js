import React from 'react';
import styled from 'styled-components';

const SearchButtonsDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 16%;
    padding-right: 30px;
`

const SearchButtons = (props) =>  {
    return(
        <SearchButtonsDiv>
            <i className="far fa-compass fa-lg" aria-hidden="false"></i>
            <i className="far fa-heart fa-lg" aria-hidden="false"></i>
            <i className="far fa-user fa-lg" aria-hidden="false"></i>
        </SearchButtonsDiv>
    )
}

export default SearchButtons;
