import styled from 'styled-components';

const Username = styled.span`
    font-weight: ${props => props.main ? 900 : 700};
    cursor: pointer;
`;

export {Username};