import styled from 'styled-components';


export const StyledHeader = styled.div`
    width: 100%;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledCompany = styled.div`
    margin-left: 1.5%;
    font-size: 4.6rem;
    display: flex;
    align-items: center;
`;

export const StyledCompanyLogo = styled.i`
    font-size: 4.8rem;
`;

export const StyledCompanyName = styled.h1`
    font-family: 'Grand Hotel', cursive;
    border-left: 1px solid black;
    margin-left: 14%;
    padding-left: 10%;
`;

export const StyledSearchForm = styled.form` 
    width: 25%;
`;

export const StyledSearchInput = styled.input`
    width: 88%;
    text-align: center;
    background: #fafafa;
    color: #999999;
    font-size: 2rem;
    line-height: 3.2rem;
    border: 1px solid #cccccc;
    border-radius: 5px;
`;

export const StyledLinks = styled.div`
    font-size: 3rem;
    margin-right: 3.5%;
    width: 13%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: #999999;
`;