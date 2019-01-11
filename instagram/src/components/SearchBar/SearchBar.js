import React from 'react';
import './searchBar.css';
import styled from 'styled-components'

const Header = styled.header`
display: flex;
`;

const SearchBarContainer = styled.section`
width: 100%;
padding: 15px;
border-bottom: 1px solid silver;
margin-bottom: 30px;
`;

const SearchInput = styled.input`
padding: 10px;
width: 200px;
// margin-right: 150px;
font-size: 14px;
border-radius: 2px;
border-color: silver;
`;


const SearchBar = props => {
    console.log(props)
    return (
    <div>
        <Header>
            <SearchBarContainer>
                <div className="instagramSearchBar">
                </div>
                <SearchInput
                    type="text"
                    className="searchInput"
                    placeholder="Search"
                    onKeyUp={props.searchFilteredPosts}
                />
            </SearchBarContainer>
        </Header>
    </div>
    )
}

export default SearchBar;