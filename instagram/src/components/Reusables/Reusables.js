import styled from 'styled-components'

export const TheApp = styled.div`
  background-color: #fafafa;
  `;

export const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
  `;

export const AppTitle = styled.div`
  font-size: 1.5em;
  `;

export const AppIntro = styled.div`
  font-size: large;
  `;

export const ThePostContainer = styled.div`
  margin-top: 150px;
  max-width: 600px;
  width: 600px;
  margin: 50px auto;
  border: 1px solid #d8d8d8;
  background-color: #ffffff;
  `;

export const NameContainer = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  `;

export const PosterName = styled.div`
  font-weight: bold;
  margin-left: 10px;
  `;

export const CommentContainer = styled.div`
  margin: 5px 10px;
  `;

export const CommenterName = styled.div`
  font-weight: bold;
  margin-right: 10px;
  display: inline;
  `;

// SearchBar Styles

export const TheSearchBar = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #d8d8d8;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  `;

export const InstaLogoBlock = styled.div`
  display: flex;
  width: 25%;
  margin-left: 20%;
  `;

export const SearchInput = styled.div`
  width: 25%;
  `;

export const SearchIcons = styled.div `
    display: flex;
    width: 25%;
    `;

export const SearchIcon = styled.div `
    height: 24px;
    width: 24px;
  `