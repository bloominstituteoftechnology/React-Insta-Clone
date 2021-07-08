

/*============================================================================*/

//-- Dependencies --------------------------------
import styled from 'styled-components';

//-- Components ----------------------------------
export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
`;
export const Label = styled.label`
    width: 100%;
    font-weight: bold;
    margin-bottom: 0.5em;
`;
export const Input = styled.input`
    width: 100%;
`;
export const Button = styled.button`
    margin-top: 0.5em;
    width: 100%;
`;
