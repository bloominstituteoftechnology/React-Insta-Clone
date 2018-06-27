import React from 'react';
import SearchLogos from './SearchLogos';
import SearchBox from './SearchBox';
import SearchIcons from './SearchIcons';
import styled from 'styled-components';

const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 54px;
margin-bottom: 24px;
`;

const SearchContainer = (props) => {
    return (
        <Header>
            <SearchLogos />
            <SearchBox searchHandler={props.searchHandler} />
            <SearchIcons handleLogout={props.handleLogout} />
        </Header>
    );
}

export default SearchContainer;