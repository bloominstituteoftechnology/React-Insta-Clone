import React from 'react';
import { NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Header, StyledNavBar, InstagramWord, InstagramLogo, InstagramSearch, StyledNav, PersonIcon, SearchIcons } from '../ReusableComponents/SearchBar';


const SearchBar = props => {
  return (
    <Header>

      <StyledNavBar>

        <NavbarBrand>

          <div>
            <InstagramLogo src="https://png.icons8.com/metro/50/000000/instagram-new.png" alt='' />
            <InstagramWord src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt='' />
          </div>
        </NavbarBrand>

        <Nav>
          <InstagramSearch value={props.value} onChange={props.onChange} type='text' placeholder='Search' />
        </Nav>

        <StyledNav>

          <NavItem>
            <SearchIcons className="far fa-compass fa-lg" />
          </NavItem>

          <NavItem>
            <SearchIcons className="far fa-heart fa-lg" />
          </NavItem>

          <NavItem>
            <PersonIcon onClick={props.logout} src='https://d30y9cdsu7xlg0.cloudfront.net/png/137578-200.png' alt='' />
          </NavItem>

        </StyledNav>

      </StyledNavBar>
      
    </Header>
  );
}

export default SearchBar;