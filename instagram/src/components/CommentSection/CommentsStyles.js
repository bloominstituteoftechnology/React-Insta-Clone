import styled from 'styled-components';
import { customLayout } from '../SearchBar/SearchBarStyles';

export const Container = styled.div`
  width: 95%;
  margin: 10px auto;
`;

export const TimeStamp = styled.p`
  margin: 0 auto;
  margin-top: 10px;
  color: #b6b6b6;
  font-size: 1.2rem;
`;

export const CommentBody = styled.div`
  margin-bottom: 5px;
`;

export const CommentText = styled.p`
  display: inline;
  font-size: 1.5rem;

  ${props => (props.type === 'username' ? `
    margin-right: 1%;
    font-weight: 700;
    line-height: 20px;
  ` : null)}
`;

export const InputWrapper = styled.div`
  height: 40px;
  margin: 10px auto;
  margin-bottom: 20px;
  border-top: 1px solid #eaeaea;
  ${customLayout('space-between', 'flex-end')}
`;

export const CommentInput = styled.input`
  width: 97%;
  font-size: 1.5rem;
  border: none;

  ::placeholder {
    color: #b6b6b6;
  }

  :focus {
    outline: none;
  }
`;
