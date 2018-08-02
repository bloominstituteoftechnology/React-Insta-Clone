import styled from 'styled-components';

export const Post = styled.div`
  margin-top: 60px;
  width: 100%;
  max-width: 614px;
  border: 1px solid #e6e6e6;
  background-color: white;
  font-size: 14px;

  @media (max-width: 500px) {
    margin-top: 0;
    border: none;
    background-color:#fafafa;
  }
`
export const PostHeader = styled.div`
  height: 60px;
  padding: 16px;
  display: flex;
  align-items: center;
  font-weight: bold;
`
export const UserThumbnailWrapper = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;  
`
export const UserThumbnail = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
`
export const AddComment = styled.div`
  border-top: 1px solid #efefef;
  padding: 20px 0;
  margin: 0 16px;

  @media (max-width: 500px) {
    display: ${props => props.focused ? 'block' : 'none'}
  }
`
export const CommentInput = styled.input`
  font-size: 14px;
  color: #999;
  outline: none;
  border: none;
`
export const Image = styled.img`
  height: auto;
  width: 100%
`
export const ButtonWrapper = styled.div`
  height: 24px;
  margin: 10px 0;
  cursor: pointer;
`
export const Button = Image.extend`
  margin-right: 10px;
  width: auto;
  height: 100%;
`
export const MainText = styled.div`
  padding: 0 16px;
`
export const Timestamp = styled.p`
  margin: 5px 0;
  font-size: 11px;
  letter-spacing: .2px;
  color: #999;
`
export const Bold = styled.h1`
  font-weight: bold;
`