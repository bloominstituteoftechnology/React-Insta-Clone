import styled from 'styled-components';

export const StyledHeader = styled.header`
  border: 1px solid gray;
`;

export const StyledPostHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 12px 0;
`;

export const StyledThumbNailImage = styled.div`
  border-radius: 50%;
  margin-left: 15px;
  cursor: pointer;
`;

export const StyledCommentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  font-size: 1.6rem;
`;
