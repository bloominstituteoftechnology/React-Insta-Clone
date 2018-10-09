import React from 'react';
import SearchBarLogo from './SearchBarLogo';
import SearchBarMenu from './SearchBarMenu';
import {Form} from 'reactstrap';
import styled from 'styled-components';

const SearchBarCContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    max-width: 880px;
    width: 100%;
`;

const SearchBarInput = styled.input`
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 2.5%;
    padding-bottom: 5px;
    padding-top: 5px;
`;

function SearchBarContainer(props) {
    return(
        <SearchBarCContainer>
            <SearchBarLogo />
            <Form onSubmit={props.search} onChange={props.handleChanging}>
                <SearchBarInput
                    type = "text"
                    name = "search"
                    placeholder = "search"
                />
            </Form>
            <SearchBarMenu />
        </SearchBarCContainer>
    )
}

export default SearchBarContainer;