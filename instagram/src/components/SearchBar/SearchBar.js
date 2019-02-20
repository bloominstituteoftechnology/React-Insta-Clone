import React from 'react';
import styled from 'styled-components'

const SearchBarContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-top:20px;
`;
const InstaGramLogoOne = styled.div`
  width:50%;
`;
const InstaGramLogoImgOne = styled.img`
  width:50%;
  padding-right:5%;
  border-right: 2px solid lightgray;
  `;
const InstaGramLogoImgTwo = styled.img`
  display:flex;
  width:100%;
`;
const InstaGramLogoTwo = styled.div`
  width:50%;
`;
const IconDiv = styled.div`
width:10%;
display:flex;
justify-content:space-between;
`;
const StyledForm = styled.form``;
const SearchInput = styled.input``;
const SubmitSearch = styled.input`
  display:none;
`;
const SearchLeft = styled.div`
  width:25%;
  display:flex;
  justify-content: space-between;
`;
const SearchHeader = styled.header`
  width: 75%;
  margin: 0 auto;
  margin-bottom:30px;
`;

//ion-icon would not work with styled, so i left it.
const SearchBar= props =>{
  return(
    <SearchHeader>
      <SearchBarContainer>
        <SearchLeft>
          <InstaGramLogoOne>
            <InstaGramLogoImgOne src = "./instasquare.png" />
          </InstaGramLogoOne>
          <InstaGramLogoTwo>
            <InstaGramLogoImgTwo src = "./wordlogo.png" />
          </InstaGramLogoTwo>
        </SearchLeft>
        <StyledForm onSubmit = {(e)=>props.submitFunction(e)}>
            <SearchInput onChange = {(e)=>props.handleChange(e)} type = "text" value = {props.fieldValue} />
            <SubmitSearch type ="submit" value = "Submit"/>
          </StyledForm>
        <IconDiv><ion-icon name="compass"></ion-icon><ion-icon name="person"></ion-icon><ion-icon name="heart-empty"></ion-icon></IconDiv>
      </SearchBarContainer>
    </SearchHeader>
  );
}

export default SearchBar;
