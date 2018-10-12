import styled, { css } from 'styled-components'

export const InstaboxDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const InstatitleDiv = styled.div`
  border-left: solid 1px black;
  padding-left: 15px;
  display: inline-block;
  padding-top: 1px;

  font-family: "Lobster Two", cursive;
  font-weight: 100;
  font-size: 24px;
`;

export const SearchInput = styled.input`
  border-style: inset;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 2rem;
  width: 213px;
  height: 26px;
  margin-top: 1px;
  font-size: 12px;
  text-align: center;
  background-color: #fafafa;
  ${props => props.searchFocus && css`
  text-align: left;
  padding-left:26px;
  background-color: white;`};
`;

export const PostContDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 77px;
`;

export const FullPageCover = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.8;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CommentTextDiv = styled.div `
    margin: 0 16px;
    font-size: 15px;
    h5{
    font-size: 15px;
}
`

export const AddCommentDiv = styled.div `
    display: flex;
    justify-content: space-between;
`

export const CommentsDiv = styled.div `
  padding: 5px 0;
    border-bottom: 1px solid #DBDBDB;
`

export const FixedHeader = styled.div `
    max-width: 1010px;
    padding: 26px 40px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 76px;
    box-sizing: border-box;
    align-items: center;
`