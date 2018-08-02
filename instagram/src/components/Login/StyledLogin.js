import styled from 'styled-components';

const StyledLogin = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 50vh;
    justify-content: center;

    > h1 {
        font-family: 'Pacifico', cursive;
        margin-bottom: 30px;
    }
`;

const StyledLoginBtn = styled.button`
    background: white;
    border-color: darkgray;
    border-radius: 5px;
    color: black;
    display: block;
    margin: 0 auto;
    transition-duration: 300ms;
    width: 40%;

    &:hover {
        background: darkgray;
        color: white;
    }
`;

export {StyledLogin as default, StyledLoginBtn};