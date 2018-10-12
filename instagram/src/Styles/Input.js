import styled, { css } from 'styled-components';

export const Input = styled.input`
  outline: 0;
  border: 1px solid #dbdbdb;
  background: #fafafa;
  
  /* Comment Input */
  ${props =>
    props.comment &&
    css`
      font-size: 1.4rem;
      margin-top: 2rem;
      width: 100%;
      background: #fff;
      border: none;
    `}

    /* Search Input */
    ${props =>
      props.search &&
      css`
        padding: 8px 0;
        width: 215px;
        height: 28px;
        border-radius: 5px;
        text-align: center;
        &:focus {
          text-align: left;
          padding-left: 2rem;
          background: #fff;
        }
      `}

    /* Login Input */
    ${props =>
      props.login &&
      css`
        margin-bottom: 1rem;
        font-size: inherit;
        padding: 0.5rem 1rem;
        border-radius: 2.5px;
        font-weight: 300;
        &:focus {
          border: 1px solid #8e8e8e;
        }
      `}
`;
