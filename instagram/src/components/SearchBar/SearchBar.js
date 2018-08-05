import React from 'react';
import styled from 'styled-components';

const Header = styled.header `
width: 100%;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
`;

const Input = styled.input `
  height: 25px;
  width: 180px;
  text-align: center;
`;

const IconDiv = styled.div `
  width: 230px;
  text-align: right;
`;

const LogoImage = styled.img `
  height: 60px;
`;

const SearchIcons = styled.img `
  height: 20px;
`;


const SearchBar = (props) => {
  return (
    <Header>
      <div><LogoImage src="https://i.warosu.org/data/fa/img/0113/35/1464364597775.jpg" /><LogoImage src="https://cdn.iphoneincanada.ca/wp-content/uploads/2017/06/Instagram_logo.svg_.png " alt="Logo" /></div>
      <form onSubmit={props.searchSubmit}><Input onChange={props.searchItem} placeholder="Search..." value={props.searchValue} /></form>
      <IconDiv > <SearchIcons onClick={props.logOut} src="https://image.freepik.com/free-icon/safari-compass-logo-ios-7-interface-symbol_318-36575.jpg" /> <SearchIcons src="https://d30y9cdsu7xlg0.cloudfront.net/png/682470-200.png" /> <SearchIcons src="http://superawesomevectors.com/wp-content/uploads/2017/10/person-outline-free-vector-icon-800x566.jpg" /> </IconDiv>
    </Header>
  );
}
export default SearchBar;
