
import styled from "styled-components";

export const FlexDiv = styled.div`
display: flex;
justify-content: space-between;
`;

export const InputBox = styled.input`
  font-size: 1.5rem;
  padding: 5px;
  width: 100%;
  :focus {
    outline: none;
  }
  border-radius: 5px;
  margin-bottom: 10px;
`

export const Button = styled.button`
  font-size: 1.4rem;
  padding: 5px 10px;
  border-radius: 5px;
  :focus {
    outline: none;
  }
  border-radius: 5px;
  ${props => (props.color === "primary" ? `background-color: #007bff; border-color: #007bff; color: #fff;` : null)}
`

export const InputLabel = styled.label`
  font-size: 1.4rem;
  font-weight: bold;
`

export const Form = styled.form`
  padding: 20px;
  font-size: 2rem;
`

export const UserName = styled.div`
  margin-left: 0.7%;
  font-size: 1.4rem;
  ${props => (props.bold ? `font-weight: bold;` : null)}
`

export const Icon = styled.div`
  cursor: pointer;
  margin-left: 2%;
  align-self: baseline;
`

