import React from 'react';
import Logo from '../../img/image.png';
import styled from 'styled-components';

const SearchBar = ({ clear, searchHandler, searchPost }) => {
  return (
    <SearchBarContainer>
      <div>
        <Img
          alt="instagram logo"
          src={Logo}
          className="logo-image"
          onClick={clear}
        />
      </div>
      <div>
        <form onSubmit={searchPost}>
          <Input onKeyDown={searchHandler} type="text" placeholder="🔍Search" />
        </form>
      </div>
      <SocialWrapper>
        <Social>
          <i className="far fa-compass" />
        </Social>
        <Social>
          <i className="far fa-heart" />
        </Social>
        <Social>
          <i className="far fa-user" />
        </Social>
      </SocialWrapper>
    </SearchBarContainer>
  );
};

const Input = styled.input`
  font-size: 18px;
  padding: 0 10px;
  border-radius: 3px;
  border-style: none;
  border: 1px lightGray solid;
`;

const Img = styled.img`
  width: 200px;
`;

const Social = styled.div`
  margin-right: 20px;
`;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;
  border: 2px solid lightgray;
`;

const SocialWrapper = styled.div`
  display: flex;
  font-size: 25px;
`;

export default SearchBar;
