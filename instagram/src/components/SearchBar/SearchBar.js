import React from 'react';
import { SearchHeader, IGsymbol, IGlogo, SearchInput, SearchIcons } from '../Styling.js';

const SearchBar = props => {
    return (
        <SearchHeader >
            <IGsymbol >
                <i className="fab fa-instagram fa-2x "></i>
            </IGsymbol>
            <IGlogo src="https://raw.githubusercontent.com/LambdaSchool/React-Insta-Clone/4079cf6fb6d11bd3ad7a422cdec35e0aab4e2bfe/instagram/src/assets/iglogo.png" alt="" />
            <SearchInput type="text" placeholder="&#8981; Search" onKeyDown={props.filterPostsHandler} />
            <SearchIcons onClick={props.logoutHandler} >
                <i className="fas fa-door-closed fa-lg"></i>
            </SearchIcons>
            <SearchIcons >
                <i className="far fa-compass fa-lg" />
            </SearchIcons>
            <SearchIcons >
                <i className="far fa-heart fa-lg" />
            </SearchIcons>
            <SearchIcons >
                <i className="far fa-user-circle fa-lg" />
            </SearchIcons>
        </SearchHeader>

    );
};

export default SearchBar;