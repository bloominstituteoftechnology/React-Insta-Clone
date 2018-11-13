import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 100%;
    font-size: 30px;
    font-weight: bold;

    input {
        width: 50%;
        padding: 5px;
        font-size: 20px;
        box-sizing: border-box;
    }

    button {
        font-size: 20px;
        padding: 5px 20px;
        background: white;
        cursor: pointer;
    }
`


const SearchForm = props => {
    return (
            <StyledForm onSubmit={props.searchItems}>
                <input type="text" name="searchText" 
                placeholder="enter search criteria" value={props.searchText}
                onChange={props.handleChange} />
                <button type="submit">Search</button>
                <button onClick={props.clearSearch}>Clear Search</button>
            </StyledForm>
    );
}

export default SearchForm;