import styled from "styled-components";

export const PostDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 450px;
  margin-bottom: 20px;
  border: 1px solid lightgrey;
  box-shadow: 1px 1px 2px lightgrey;
`;

export const PostTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const PostTitleImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 5px;
`;

export const PostImg = styled.img`
  width: 100%;
`;

export const PostIcons = styled.div`
  margin: 0;
  font-size: 1.5rem;
`;

export const I = styled.i`
  margin-left: 10px;
`;

export const PostLikes = styled.p`
  margin: 0 0 5px 10px;
`;
