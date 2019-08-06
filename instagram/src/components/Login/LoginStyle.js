import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  padding-top: 150px;
`;

export const StyledLogin = styled.input`
  width: 200px;
  height: 25px;
  padding-left: 10px;
  margin-right: 20px;
  opacity: 0.5;
  border: 1px solid #555555;
`;
export const StyledLoginButton = styled.button`
  background-color: #555555;
  color: white;
  transition-duration: 0.4s;

  &:hover {
    background-color: white;
    color: #555555;
    cursor: pointer;
  }
`;
