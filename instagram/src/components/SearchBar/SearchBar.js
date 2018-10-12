import React, {Component} from 'react';
import SearchLogo from './SearchLogo.js';
import SearchInputs from './SearchInputs.js';
import SearchButtons from './SearchButtons.js';
import './SearchBar.css';
import styled from 'styled-components';

const SearchBarDiv = styled.div`
    width: 968px;
    margin: 38px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 45px;
    border-bottom: 1px solid lightgray;
    padding-bottom: 20px;
`

class SearchBar extends Component {
    render()    {
        return(
            <SearchBarDiv>
                <SearchLogo />
                <SearchInputs value= {this.props.value} filter={this.props.filter} />
                <SearchButtons />
            </SearchBarDiv>
        )
    }
}

export default SearchBar;
