import styled from "styled-components";
import { FlexDiv, UserName, Icon } from './basicStyles';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  margin-top: 100px;
`

export const PostBody = styled.div`
  border: 1px solid lightgray;
  padding: 15px 0;
  margin: 40px 0;
  border-radius: 5px;
`

export const PostName = styled(FlexDiv)`
  align-items: baseline;
  justify-content: start;
  padding-left: 2%;
`

export const PostThumbnail = styled.img`
  border-radius: 50%;
  width: 4.5%;
`

export const PostUserName = styled(UserName)`
  align-self: center;
  font-weight: bold;
`

export const PostImg = styled.img`
  width: 100%;
  margin: 10px 0;
`

export const PostIcon = styled(Icon)`
  display: inline-block;
`

export const PostLikes = styled.div`
  margin-left: 15px;
  margin-top: 5px;
  font-size: 1.4rem;
`