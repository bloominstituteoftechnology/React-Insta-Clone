import styled from 'styled-components';

/* eslint-disable */

export const LoginContainer = styled.div
`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 10px;
  width: 30%;
  padding: 20px;
  background-color: #a3944c;

  @media (max-width: 1000px) {

    width: 50%;

  }

  @media (max-width: 500px) {

    width: 85%;

  }

`;

export const LoginHeader = styled.h1
`

  text-align: center;
  font-size: 5rem;
  margin-bottom: 20px;

`;

export const LoginForm = styled.form
`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const LoginInput = styled.input
`

  margin-bottom: 20px;
  width: 40%;
  padding: 10px;
  border: 1px solid black;

`;

export const LoginBtn = styled.button
`

  width: 40%;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;

  &:hover {

    background-color: #d1d0c4;

  }

`;
