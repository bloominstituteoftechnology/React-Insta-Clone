import React from 'react';

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import './SearchBar.css';

const SearchBar = props => {
    return(
        <Navbar>
          <NavbarBrand><i className="fab fa-instagram"> | Instaclone</i></NavbarBrand>
            <input 
                type='text'
                name='searchText'
                placeholder='Search'
                value={props.searchText}
                onChange={props.handleChange}
            />
            <Nav navbar>
                <NavItem>
                    <NavLink ><i className="far fa-compass"></i></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink ><i className="far fa-heart"></i></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={props.logout} ><i className="far fa-user"></i></NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default SearchBar;