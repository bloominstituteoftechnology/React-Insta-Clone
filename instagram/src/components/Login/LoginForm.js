import styled from 'styled-components'

export const MainHeader = styled.h1`
  font-size: 36px;
  font-style: italic;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${window.innerHeight}px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: grey;
  width: 80%;
  border-radius: 4px;
`

export const InputForm = styled.input`
  color: black;
  background-color: white;
`;

export const LoginLabel = styled.label`
  padding: 10px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
`