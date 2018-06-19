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
                    <NavbarBrand><img src="./icons/icons8-heart-50.png" alt="cam"></img></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <input type="text"
                        placeholder="Search..."
                        className="ml-auto text-center"
                    />
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
