import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 77px;
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,.0975);
  position: fixed;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: center;
`
export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  padding: 26px 40px;
  max-width: 1010px;
  width: 100%; 

  @media (max-width: 580px) {
    padding: 26px 10px;
    justify-content: center;
  }
`
export const SearchBrandWrapper = styled.div`
  margin: -6px 0;
  display: inline-block;
  
  @media (max-width: 768px) {
    transform: scale(.8);
    padding-left: 0;
  }
`
export const Image = styled.img`
  height: 100%;
  width: auto;
`
export const Search = styled.div`
  display: flex;
  align-items: center;
  width: 215px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  height: 28px;
  background-color: #fafafa;
  padding: 5px 2px;

  @media (max-width: 768px) {
    width: 175px;
  }

  @media (max-width: 580px) {
    display: none;
  }
`
export const Input = styled.input`
  padding-left: 5px;
  font-size: 14px;
  border: none;
  outline: none;
  background-color: #fafafa;
`
export const SearchIcons = Image.extend`
  margin-left: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 20px;
  }

  @media (max-width: 580px) {
    margin-left: 20px;
  }
`