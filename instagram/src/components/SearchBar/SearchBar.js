import React from 'react';
import './SearchBar.css';
import styled from "styled-components";

const Bar = styled.input`
    width: 250px;
    height: 30px;
`;


const SearchBar = (props) => {
    return (
        <form>
             <Bar
                type="text"
                onKeyDown={props.toggleSelected}
                className="searchbar"
                placeholder="Search here"    
             />
        </form>
   
    )
}

export default SearchBar;