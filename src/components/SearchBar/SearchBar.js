import React from 'react';
import './SearchBar.css'
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';



export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="search-container">
                <Navbar color="light" light expand="md">
                    <NavbarBrand>Instragram</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
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
