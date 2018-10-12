import React from 'react';
import Styled from 'styled-components'

const Input = Styled.input`
    height:30px;
    width:250px;
`

const SearchBar = props =>{
    return(
        <div>
            <form onSubmit={props.handleSearchSubmit}>
                <Input placeholder="Search" onChange={props.handleSearchChange} value={props.searchText}  type='text'></Input>
            </form>
        </div>   
    )
}
export default SearchBar;