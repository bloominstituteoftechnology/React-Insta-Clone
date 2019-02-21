import styled from "styled-components";
import { UserName, InputBox } from './basicStyles';

export const CommentUserName = styled(UserName)`
  display: inline-block;
  margin-right: 10px;
`

export const CommentText = styled.p`
  display: inline-block;
`

export const CommentBlock = styled.div`
  margin-left: 20px;
  font-size: 1.4rem;
  width: 100%;
`

export const PostDate = styled.div`
  margin-left: 15px;
  font-size: 1.2rem;
  color: grey;
`
export const Comments = styled.div`
  margin: 10px 0;
` 

export const CommentInput = styled(InputBox)`
  padding: 10px;
  border: none;
  border-top: 1px solid lightgray;
  margin-left: 15px;
  margin-top: 20px;
  width: 95%;
`