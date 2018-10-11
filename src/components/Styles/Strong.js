import styled, {css} from 'styled-components';

const Strong = styled.p`
    font-weight: bold;

    ${props => (props.type === 'header' ? `font-size: 16px; padding-left: 10px` : null)}
    ${props => (props.type === 'comment' ? `font-size: 14px` : null)}
`;

export default Strong;