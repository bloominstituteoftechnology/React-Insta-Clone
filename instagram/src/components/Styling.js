import styled from "styled-components";

export const SearchHeader = styled.header`
    border: 1px solid lightgray;
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    margin: auto; 
    height: 50px; 
`;

export const IGsymbol = styled.span`
    width: 188px;
    border-right: 1px solid lightgray;
`;

export const IGlogo = styled.img`
    width: 75px;
    margin-left: 10px;
`;

export const SearchInput = styled.input`
    text-align: center;
    margin-left: 15%;
    margin-right: 15%;
`;

export const SearchIcons = styled.span`
    margin: 0 5px;
    font-weight: 100;
`;