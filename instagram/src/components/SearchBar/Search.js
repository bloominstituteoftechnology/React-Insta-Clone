import React from 'react';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Header, SearchInput } from "../../Styles";

const Search = props => {
    return (
        <Header>
            <label htmlFor="searchInput"><FontAwesomeIcon icon={['fas', 'search']} className={"searchIcon"} /></label>
            <SearchInput 
            id="searchInput" 
            type="text" 
            placeholder="Search"         
            // value={props.filterTarget}
            onChange={props.searchPostsHandler}
            name="filterTarget"
            />
        </Header>
    );
}

export default Search;