import styled from 'styled-components';

export const Post = styled.div`
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  margin: 60px 0 0;
  max-width: 616px;
`;

export const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #efefef;
  /* height: 60px; */
  padding: 16px;
`;

export const PostHeaderImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const PostUsername = styled.h3`
  margin: 0;
  font-size: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
