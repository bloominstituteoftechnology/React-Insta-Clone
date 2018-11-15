import React from 'react';
import './searchBar.css';
import PropTypes from 'prop-types';
import { SearchBarDiv, InputField, SearchInput } from './StyledSearchBar';


const SearchBar =  props => {
    return (
        <SearchBarDiv>
            <form>
                <InputField>
                    <i className={props.isSelected ? "fas fa-search icon-left": "fas fa-search"}></i>
                    <SearchInput
                        type="text"
                        name="searchText"
                        placeholder={props.isSelected ? props.searchText : "   Search"}
                        value={props.searchText}
                        onChange={props.handlesChanges}
                        onClick={props.hasBeenClicked}
                    />
                    <i 
                        className={props.isSelected ? "fas fa-times-circle" : "hide"}
                        onClick={props.clearSearchText}></i>
                </InputField>
            </form>
        </SearchBarDiv>
    );
}

SearchBar.propTypes = {
    searchText: PropTypes.string.isRequired,
    hanldesChanges: PropTypes.func,
}

export default SearchBar;