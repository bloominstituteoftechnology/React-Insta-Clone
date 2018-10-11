// copy in Modern Button Styles from https://codepen.io/archivum/pen/NPPOaj 
import styled, { css } from "styled-components";

export const StyedButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  ${props => props.hidden ? css`display: none` : null} 
  @media (max-width: 900px) {
    width: 100%;
  }
`

export const TomatoButton = styled(StyledButton)`
  background-color: tomato;
`

export const AppleButton = styled(StyledButton)`
  background-color: green;
`
