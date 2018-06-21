import styled, { css } from 'styled-components';

const UsernameSpan = styled.span`
  font-weight: 600;

  ${props => props.comment && css`
    margin: 0 8px 0 0;
  `}

`;

export default UsernameSpan;