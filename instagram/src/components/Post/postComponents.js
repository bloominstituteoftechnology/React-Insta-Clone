

/*============================================================================*/

//-- Dependencies --------------------------------
import styled from 'styled-components';

//-- Components ----------------------------------
export const Container = styled.div`
    font-family: sans-serif;
    width: 600px;
    border: solid #ccc 1px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
`;
export const Header = styled.div`
    display: flex;
    align-items: center;
`;
export const HeaderImg = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin: 16px;
`;
export const Photo = styled.div`
    width: 600px;
`;
export const PhotoImg = styled.img`
    width: 100%;
    height: auto;
`;