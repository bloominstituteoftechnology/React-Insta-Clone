import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Input} from 'reactstrap';
import './SearchBar.css';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render () {
        return (
            <div>
                <Navbar>
                    <NavbarBrand>
                        <div className="flex">
                            <div className="home">Home-</div>
                            <div>Instagram</div>
                        </div>
                    </NavbarBrand>
                    <Nav>
                        <Input placeholder="search" />
                    </Nav>
                    <Nav className="flex">
                        <div>Explore</div>
                        <div>Likes</div>
                        <div>Me</div>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default SearchBar;