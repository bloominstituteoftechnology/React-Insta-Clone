import styled, { css } from 'styled-components' ;
// import Heart from '../Heart/Heart' ;
import styles from '../../App' ;



export const Flex = styled.div`
    display: flex ;
`;
export const FlexJustCen =  Flex.extend`
justify-content: center;  
`;
export const FlexJustAr =  Flex.extend`
justify-content: space-around;
`;
export const FlexJustStart =  Flex.extend`
justify-content: flex-start;
`;
export const FlexChildEnd = styled.img`
    align-self: flex-end;
`;