import React from 'react';
import './SearchBar.css'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';



export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }
    }
    render() {
        return (
            <div className="search-container">
                <Navbar color="light" light expand="md">
                    <NavbarBrand>Instagram</NavbarBrand>
                    <input type="text"
                        placeholder="Search..."
                        className="ml-auto text-center search-bar"
                    />
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="">Like</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">Profile</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
