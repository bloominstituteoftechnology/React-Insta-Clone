import styled from "styled-components";

const StyledSearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2%;
`;

const StyledInstagramText = styled.h1`
    border-left: 1px solid grey;
    padding-left: 5%;
`;

const StyledNavIcons = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledIcons = styled.i`
    padding: 0 10%;
`;

const StyledSearchInput = styled.input`
    padding: 0 15%;
    align-items: center;
`;


export {StyledSearchBarContainer, StyledInstagramText, StyledNavIcons, StyledIcons, StyledSearchInput};