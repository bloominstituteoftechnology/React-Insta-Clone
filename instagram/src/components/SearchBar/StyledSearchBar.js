import styled from 'styled-components';

const StyledSearchBar = styled.div`
    background: whitesmoke;
    display: flex;
    height: 40px;
    justify-content: center;
    position: fixed;
    width: 100%;
`;

const StyledSearchForm = styled.form`
    align-items: center;
    display: flex;
    position: relative;

    > i {
        left: 60px;
        pointer-events: none;
        position: relative;
        z-index: 2;
    }
`;

const StyledSearchInput = styled.input`
    background: white;
    border-radius: 5px;
    width: 80%;
`;

const StyledBtnDiv = styled.div`
    align-items: center;
    display: flex;
    left: -10px;
    position: relative;
`;

const StyledLogoutBtn = styled.button`
    border-radius: 5px;
`;

export {StyledSearchBar, StyledSearchForm, StyledSearchInput, StyledBtnDiv, StyledLogoutBtn};