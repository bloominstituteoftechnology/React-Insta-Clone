import styled from "styled-components";

// SearchBar Components

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
    text-align: center;
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

// PostContainer Components

export const PostWrapper = styled.div`
    margin: 22px 0;
    border: 1px solid lightgray;
`;

export const PostHeader = styled.div`
    display: flex; 
    align-items: center; 
    margin: 10px 0; 
`;

export const ThumbImg = styled.img`
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin: 0 10px;
`;

