import React from 'react';
import {    
    Navbar,    
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,    
} from 'reactstrap';


const SearchBar = props => {
    return (
        <Navbar className="nav-wrapper">
            <NavbarBrand> 
                <div className="top-searchbar">
                  <img className="ig-searchbar" src={"https://raw.githubusercontent.com/LambdaSchool/React-Insta-Clone/master/assets/ig_search_bar.png"} />
                </div>
            </NavbarBrand>
        </Navbar>

    )
}

export default SearchBar;

