import React from 'react';
import styled from 'styled-components';

const StyledSearchContainer = styled.div`
  width: 98%;
  max-width: 1400px;
  margin: 0 auto;
  border-bottom: 1px solid gainsboro;
  position: fixed;
  z-index: 1;
  background-color: white;
`;

const StyledSearchBox = styled.div`
  display: flex;
  height: 76px;
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoBox = styled.div`
  display: flex;
  align-items: center;
  width: 165px;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 500px) {
    width: 135px;
  }
`;
const StyledLogoBoxImg = styled.img`
  height: 32px;
  width: 32px;
`;
const StyledSearchBarBreak = styled.div`
  font-size: 3.2rem;
  font-weight: 100;
  padding-bottom: 5px;
`;
const StyledSearchLogoTitle = styled.div`
  font-family: 'Grand Hotel', cursive;
  font-size: 3.4rem;
  font-weight: 600;

  @media (max-width: 500px) {
    font-size: 2.8rem;
  }
`;
const StyledSearchForm = styled.form`
  width: 26%;
`;
const StyledSearchInput = styled.input`
  background-image: url(https://png.icons8.com/ios-glyphs/48/000000/search.png);
  background-repeat: no-repeat;
  background-size: 12px;
  background-position: 34%;
  width: 89%;
  height: 29px;
  border-radius: 5px;
  background-color: whitesmoke;
  padding-left: 34%;
  border: 1px solid gainsboro;

  @media (max-width: 1040px) {
    padding-left: 33%;
    background-position: 31%;
  }

  @media (max-width: 500px) {
    background-position: 6%;
    padding-left: 22%;
  }
`;
const StyledTopButtonBox = styled.div`
  display: flex;
  align-items: center;
  height: 76px;
  width: 14.5%;
  justify-content: space-between;
  min-width: 100px;
`;
const StyledTopButtonBoxImg = styled.img`
  height: 25px;
  width: 25px;
  cursor: pointer;
`;

class SearchBar extends React.Component {
  logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('loggedIn');
    window.location.reload();
  };
  render() {
    return (
      <StyledSearchContainer>
        <StyledSearchBox>
          <StyledLogoBox>
            <StyledLogoBoxImg
              src='https://png.icons8.com/windows/48/000000/instagram-new.png'
              alt=''
            />
            <StyledSearchBarBreak>|</StyledSearchBarBreak>
            <StyledSearchLogoTitle>Instagram</StyledSearchLogoTitle>
          </StyledLogoBox>
          <StyledSearchForm>
            <StyledSearchInput
              placeholder={'Search'}
              onChange={this.props.searchFilter}
              onKeyDown={this.props.clearSearch}
            />
          </StyledSearchForm>
          <StyledTopButtonBox>
            <StyledTopButtonBoxImg
              src='https://png.icons8.com/ios/48/000000/compass.png'
              alt=''
            />
            <StyledTopButtonBoxImg
              src='https://png.icons8.com/ios/48/000000/hearts.png'
              alt=''
            />
            <StyledTopButtonBoxImg
              src='https://png.icons8.com/ios/48/000000/gender-neutral-user.png'
              onClick={this.logout}
              alt=''
            />
          </StyledTopButtonBox>
        </StyledSearchBox>
      </StyledSearchContainer>
    );
  }
}

export default SearchBar;
