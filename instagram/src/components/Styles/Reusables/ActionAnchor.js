import styled, { css } from 'styled-components';
import sprites from'../../instagram-sprites.png';

const ActionAnchor = styled.a`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url(${sprites});
  background-size: 495px 483px;
  color: rgba(0,0,0,0);
  pointer-events: auto;
  cursor: pointer;

  ${props => props.explore && css`
    background-position: -176px -399px;
    margin: 0 0 0 24px;
  `}

  ${props => props.activity && css`
    background-position: -150px -425px;
    margin: 0 0 0 24px;
  `}

  ${props => props.profileAction && css`
    background-position: -376px -399px;
    margin: 0 0 0 24px;
  `}

  ${props => props.like && css`
    background-position: -75px -425px;
    margin: 0 15px 0 0;
  `}

  ${props => props.comment && css`
    background-position: -401px -399px;
  `}

`;

export default ActionAnchor;