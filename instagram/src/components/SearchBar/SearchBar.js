import React from 'react';
import PropTypes from 'prop-types';
import { StyledSearchBar, 
    StyledSearchForm, StyledSearchInput, 
    StyledBtnDiv, StyledLogoutBtn } 
from './StyledSearchBar';

const SearchBar = props => {
    return (
        <StyledSearchBar>
            <i className="fab fa-instagram fa-2x" />
            <StyledSearchForm onSubmit={props.onSearch}>
                {props.isEmpty ?  <i className="fas fa-search" /> : <p>&emsp;</p>}
                <StyledSearchInput 
                    onChange={props.onChange}
                    type="text" 
                    placeholder="              Search" />
            </StyledSearchForm>
            <StyledBtnDiv>
                <form>
                    <StyledLogoutBtn onClick={props.logOut}>Log Out!</StyledLogoutBtn>
                </form>
            </StyledBtnDiv>
        </StyledSearchBar>
    );
};

SearchBar.propTypes = {
    isEmpty: PropTypes.bool,
    onChange: PropTypes.func,
    onSearch: PropTypes.func
};

export default SearchBar;