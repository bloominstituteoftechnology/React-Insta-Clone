import React, {Component}from 'react';
import logo from '../../assets/logo.png'
import title from '../../assets/title.png'
import explore from '../../assets/explore.png'
import likes from '../../assets/likes.png'
import profile from '../../assets/profile.png'

// import '../../App.css'

import styled from 'styled-components';

const Header = styled.div`
  height: 77px;
  display: flex;
  margin: 100px auto;
  border: 1px solid black;
  width: 940px;
  align-items: center;
  justify-content: space-between;
`;

const LogoImg = styled.img`
height: 43%;
`;
const TitleImg = styled.img`
  height: 54%;
`;
const ExploreImg = styled.img`
  height: 42%
`;
const LikesImg = styled.img`
  height: 44%
`;
const ProfileImg = styled.img`
  height: 52%
`;


const Wrapper = styled.div`
  height: 100%
  display: flex;
  align-items: center;
`
const Form = styled.form`

`
const Input = styled.input`

`



const SearchBar = props => {
  return (
    <Header>
      <Wrapper>
        <LogoImg src={logo}/>
        <TitleImg src={title} />
      </Wrapper>
      <Form onSubmit={props.filterEntries}>
          <Input type="text" name="name"
          value={props.value}
          onChange={props.updateFilter}
        />
      </Form>
      <Wrapper>
        <ExploreImg src={explore} />
        <LikesImg src={likes} />
        <ProfileImg src={profile} />
      </Wrapper>
    </Header>
  )
}





export default SearchBar
