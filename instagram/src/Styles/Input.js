import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  outline: 0;
  border: 1px solid #dbdbdb;
  background: #fafafa;
  /* Comment */
  
  font-size: 1.4rem;
  margin-top: 2rem;
  width: 100%;
  /* Search */
  padding: 8px 0;
  width: 215px;
  height: 28px;
  
  border-radius: 5px;
  text-align: center;
  
  /* Login */
  
  
  
  margin-bottom: 1rem;
  font-size: inherit;
  padding: 0.5rem 1rem;
  border-radius: 2.5px;
  font-weight: 300;


  ${props =>
    props.type === 'comment' ? `border: none, background: #fff` : null}
  ${props => (props.type === 'search' ? `background: #2196f3` : null)}
  ${props => (props.type === 'login' ? `background: #2196f3` : null)}

`;

export default Input;
