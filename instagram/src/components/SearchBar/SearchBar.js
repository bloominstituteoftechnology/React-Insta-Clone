import React from 'react';

import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const SearchBar = props => {
    return(
        <Navbar color="light" light expand="md">
          <NavbarBrand><i className="fab fa-instagram"> | Instaclone</i></NavbarBrand>
        <NavbarToggler />
            <input 
                type='text'
                name='searchText'
                placeholder='Search'
                value={props.searchText}
                onChange={props.handleChange}
            />
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink ><i className="far fa-compass"></i></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink ><i className="far fa-heart"></i></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink ><i className="far fa-user"></i></NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default SearchBar;