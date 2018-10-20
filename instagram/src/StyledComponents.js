import styled from 'styled-components';

export const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 50%;
    height: 40vh;
    border: 2px solid royalblue;

    margin: 10vh auto;

`;

export const LoginInput = styled.input`
    width: 70%;
    height: 3vh;
    margin-bottom: 15px;
    align-self: center;
`;

export const LoginSubmit = styled.button`
    width: 30%;
    height: 4vh;
    align-self: center;
    border-radius: 6px;
    margin-top: 15px;
    font-size: 16px;
    
    &:hover{
        background-color: green;
    }
`;

export default LoginDiv;
